(ns sweeper.ui
  (:require [replicant.alias :refer [defalias]]))

(defalias :ui/tile [{:keys [id maybe? mine? revealed? threat-count]}]
  (if revealed?
    [:div {:class [:tile (when mine? :mine)]}
     (when (< 0 threat-count)
       threat-count)]
    [:div {:class "tile"
           :on {:click [[:reveal-tile id]]
                :ContextMenu [[:mark-tile id]]}}
     [:div {:class "lid"}
      (when maybe? "?")]]))

(defalias :ui/line [_ tiles]
  [:div.row
   (for [tile tiles]
     [:ui/tile tile])])

(defalias :ui/board [{:keys [cols tiles]}]
  [:div.board
   (for [ts (partition cols tiles)]
     [:ui/line ts])])

(defn render [data]
  [:ui/board data])
