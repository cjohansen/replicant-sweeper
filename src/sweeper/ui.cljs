(ns sweeper.ui
  (:require [replicant.alias :refer [defalias]]))

;; Rendering details

(defalias cell [{:keys [actions text covered? class] :as a} b]
  [:div.tile
   (cond-> {:class class}
     (not-empty actions) (assoc :on actions))
   (if covered?
     [:div.lid text]
     text)])

(defalias board [_ xs]
  [:div.board xs])

(defalias line [_ xs]
  [:div.line xs])

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

;; Overall structure

(defn render [{:keys [cols tiles]}]
  [board
   (for [ts (partition cols tiles)]
     [line
      (for [tile ts]
        [cell (prepare-tile tile)])])])
