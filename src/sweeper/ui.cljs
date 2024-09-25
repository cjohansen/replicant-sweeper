(ns sweeper.ui
  (:require [replicant.alias :refer [defalias]]))

;; Rendering details

(defalias :ui/tile [{:keys [actions text covered? class]}]
  [:div.tile
   {:class class
    :on actions}
   (if covered?
     [:div.lid text]
     text)])

(defalias :ui/board [_ xs]
  [:div.board (seq xs)])

(defalias :ui/line [_ xs]
  [:div.line (seq xs)])

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
  [:ui/board {:replicant/key (replicant.alias/get-aliases)}
   (for [ts (partition cols tiles)]
     [:ui/line
      (for [tile ts]
        [:ui/tile (prepare-tile tile)])])])
