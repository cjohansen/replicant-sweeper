(ns sweeper.client
  (:require [replicant.dom :as replicant]
            [sweeper.game :as sweeper]
            [sweeper.ui :as ui]))

(defonce app-data (atom (sweeper/create-game {:cols 16 :rows 16 :mines 48})))
(defonce app-history (atom [@app-data]))
(defonce el (.getElementById js/document "board"))

(defn undo []
  (swap! app-history pop)
  (reset! app-data (last @app-history)))

(replicant/set-dispatch!
 (fn [re actions]
   (println "Dispatch" (pr-str re))
   (doseq [[action id] actions]
     (println "Processing action" (pr-str action) (pr-str id))
     (case action
       :action/reveal-tile
       (swap! app-data sweeper/reveal-tile id)

       :action/mark-tile
       (swap! app-data assoc-in [:tiles id :maybe?] true)

       :action/prevent-default
       (.preventDefault (:replicant/dom-event re))))))

(defn render [data]
  (let [start (js/Date.)]
    (replicant/render el (ui/render data))
    (println "Rendered in" (str (- (js/Date.) start) "ms"))))

(defn start []
  (add-watch
   app-data :history
   (fn [_key _ref _old new]
     (when-not (= (last @app-history) new)
       (swap! app-history conj new))
     (render new)))
  (render @app-data))

(comment

  (set! *print-namespace-maps* false)

  (require '[replicant.alias :as alias])

  (-> (ui/render @app-data)
      alias/expand-1)

)
