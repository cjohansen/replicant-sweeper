(ns replicant.alias
  (:require [clojure.walk :as walk]
            [replicant.assert :as assert]
            [replicant.core :as r]
            [replicant.hiccup :as hiccup])
  #?(:cljs (:require-macros [replicant.alias])))

(def aliases (atom {}))

(defmacro defalias [alias & forms]
  (let [[_docstring [attr-map & body]]
        (if (string? (first forms))
          [(first forms) (next forms)]
          ["" forms])
        alias-f (if (assert/assert?)
                  `(fn [& args#]
                     (let [~attr-map args#]
                       (some-> (do ~@body)
                               (with-meta {:replicant/context
                                           {:alias ~alias
                                            :data (first args#)}}))))
                  `(fn ~attr-map ~@body))]
    `(let [f# ~alias-f]
       (swap! aliases assoc ~alias f#)
       nil)))

(defn get-aliases []
  @aliases)

(defn alias-hiccup? [x]
  (and (r/hiccup? x) (qualified-keyword? (first x))))

(defn ->hiccup [headers]
  (when headers
    (or (hiccup/text headers)
        (into [(keyword (hiccup/tag-name headers))
               (let [attrs (r/get-attrs headers)]
                 (cond-> (hiccup/attrs headers)
                   (:id attrs) (assoc :id (:id attrs))
                   (:classes attrs) (assoc :class (set (:classes attrs)))))]
              (r/flatten-seqs (hiccup/children headers))))))

(defn expand-aliased-hiccup [x opt]
  (if (alias-hiccup? x)
    (->> (r/get-hiccup-headers nil x)
         (r/get-alias-headers opt)
         ->hiccup)
    x))

(defn get-opts [aliases]
  {:aliases (or aliases (get-aliases))})

(defn expand-1 [hiccup & [{:keys [aliases]}]]
  (walk/postwalk #(expand-aliased-hiccup % (get-opts aliases)) hiccup))

(defn expand [hiccup & [{:keys [aliases]}]]
  (walk/prewalk #(expand-aliased-hiccup % (get-opts aliases)) hiccup))
