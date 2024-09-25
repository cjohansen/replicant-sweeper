(ns sweeper.ui
  (:require [replicant.alias :refer [defalias]]))

;; Rendering details

(defalias tile [{:keys [actions text covered? class]}]
  [:div.tile
   {:class class
    :on actions}
   (if covered?
     [:div.lid text]
     text)])

(defalias board [attrs xs]
  [:div.board xs])

(defalias line [_ xs]
  [:div.line xs])

;; Data transformation / rendering logic

(defn prepare-tile [{:keys [id maybe? mine? revealed? threat-count]}]
  (cond-> {:covered? (not revealed?)}
    (not revealed?)
    (assoc :actions
           {:click [[:reveal-tile id]]
            :contextmenu [[:mark-tile id]]})

    (and revealed? (< 0 threat-count))
    (assoc :text threat-count)

    (and (not revealed?) maybe?)
    (assoc :text "?")

    (and revealed? mine?)
    (assoc :class "mine")))

;; Overall structure

(defn render [{:keys [cols tiles]}]
  [board {:replicant/key (replicant.alias/get-aliases)}
   (for [ts (partition cols tiles)]
     [line
      (for [tile ts]
        [tile (prepare-tile tile)])])])
