(ns sweeper.ui-test
  (:require [sweeper.ui :as ui]
            [clojure.test :refer [deftest is testing]]))

(deftest render-test
  (testing "Lays out tiles in columns"
    (is (= (->> (ui/prepare-ui-data
                 {:tiles [{:id 1} {:id 2} {:id 3} {:id 4}]
                  :cols 2})
                (tree-seq coll? identity)
                (filter :tiles)
                (map #(count (:tiles %))))
           [2 2])))

  (testing "Clicking the first tile reveals it"
    (is (= (->> (ui/prepare-ui-data
                 {:tiles [{:id 1} {:id 2} {:id 3} {:id 4}]
                  :cols 2})
                :lines
                first
                :tiles
                first
                :actions
                :click)
           [[:action/reveal-tile 1]])))

  (testing "Renders revealed tile"
    (is (= (->> (ui/prepare-ui-data
                 {:tiles [{:id 1 :revealed? true} {:id 2} {:id 3} {:id 4}]
                  :cols 2})
                :lines
                first
                :tiles
                first)
           {:covered? false})))

  (testing "Renders revealed mine"
    (is (= (->> (ui/prepare-ui-data
                 {:tiles [{:id 1 :revealed? true :mine? true} {:id 2} {:id 3} {:id 4}]
                  :cols 2})
                :lines
                first
                :tiles
                first)
           {:covered? false
            :class "mine"}))))
