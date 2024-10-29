(ns sweeper.ui
  (:require [replicant.alias :refer [defalias]]))

;; Rendering details

(defn tile [{:keys [actions text covered? class]}]
  [:div.tile
   (cond-> {:class class}
     (not-empty actions) (assoc :on actions))
   (if covered?
     [:div.lid text]
     text)])

;; Data transformation / rendering logic

(defn prepare-tile [{:keys [id maybe? mine? revealed? threat-count]}]
  (cond-> {:covered? (not revealed?)}
    (not revealed?)
    (assoc :actions
           {:click [[:action/reveal-tile id]]
            :contextmenu [[:action/prevent-default]
                          [:action/mark-tile id]]})

    (and revealed? (< 0 threat-count))
    (assoc :text threat-count)

    (and (not revealed?) maybe?)
    (assoc :text "?")

    (and revealed? mine?)
    (assoc :class "mine")))

(defn prepare-ui-data [{:keys [cols tiles]}]
  {:lines
   (for [ts (partition cols tiles)]
     {:tiles (for [tile ts]
               (prepare-tile tile))})})

;; Overall structure

(defn render [{:keys [lines]}]
  [:div.board
   (for [line lines]
     [:div.line
      (for [t (:tiles line)]
        (tile t))])])
