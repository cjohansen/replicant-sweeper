(ns sweeper.ui
  (:require [replicant.alias :refer [defalias]]))

(defn prepare-tile [{:keys [id maybe? mine? revealed? threat-count]}]
  (cond-> {:actions (when-not revealed?
                      {:click [[:reveal-tile id]]
                       :contextmenu [[:mark-tile id]]})
           :covered? (not revealed?)}
    (and revealed? (< 0 threat-count))
    (assoc :text threat-count)

    (and (not revealed?) maybe?)
    (assoc :text "?")

    (and revealed? mine?)
    (assoc :class "mine")))

(defalias :ui/tile [{:keys [actions text covered? class]}]
  [:div.tile
   {:class class
    :on actions}
   (if covered?
     [:div.lid text]
     text)])

(defalias :minesweeper/tile [tile]
  [:ui/tile (prepare-tile tile)])

(defalias :minesweeper/line [_ tiles]
  [:div.row
   (for [tile tiles]
     [:minesweeper/tile tile])])

(defalias :minesweeper/board [{:keys [cols tiles]}]
  [:div.board
   (for [ts (partition cols tiles)]
     [:minesweeper/line ts])])

(defn render [data]
  [:minesweeper/board data])
