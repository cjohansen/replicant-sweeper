(ns sweeper.ui
  (:require [replicant.dom :as replicant]
            [sweeper.game :as sweeper]))

(defonce app-data (atom (sweeper/create-game {:cols 16 :rows 16 :mines 48})))
(defonce app-history (atom [@app-data]))
(defonce el (.getElementById js/document "board"))

(defn undo []
  (swap! app-history pop)
  (reset! app-data (last @app-history)))

(defn tile-view [tile]
  (if (:revealed? tile)
    [:div {:class [:tile (when (:mine? tile) :mine)]}
     (when (< 0 (:threat-count tile))
       (:threat-count tile))]
    [:div {:class "tile"
           :on {:click [[:reveal-tile (:id tile)]]
                :ContextMenu [[:mark-tile (:id tile)]]}}
     [:div {:class "lid"}
      (when (:maybe? tile) "?")]]))

(defn line-view [tiles]
  [:div {:class "row"}
   (map tile-view tiles)])

(defn board-view [game]
  [:div {:class "board"}
   (map line-view (partition (:cols game) (:tiles game)))])

(replicant/set-dispatch!
 (fn [re _e actions]
   (prn "Dispatch" re)
   (doseq [[action id] actions]
     (prn "Processing action" action id)
     (case action
       :reveal-tile
       (swap! app-data sweeper/reveal-tile id)

       :mark-tile
       (swap! app-data assoc-in [:tiles id :maybe?] true)))))

(defn render [data]
  (let [start (js/Date.)]
    (replicant/render el (board-view data))
    (println "Rendered in" (str (- (js/Date.) start) "ms"))))

(defn start []
  (add-watch
   app-data :history
   (fn [_key _ref _old new]
     (when-not (= (last @app-history) new)
       (swap! app-history conj new))
     (render new)))
  (render @app-data))
