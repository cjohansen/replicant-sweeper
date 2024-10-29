(ns sweeper.ui-test
  (:require [sweeper.ui :as ui]
            [lookup.core :as lookup]
            [clojure.test :refer [deftest is testing]]))

(deftest render-test
  (testing "Lays out tiles in columns"
    (is (= (->> (ui/render {:tiles [{:id 1} {:id 2} {:id 3} {:id 4}]
                            :cols 2})
                (lookup/select :sweeper.ui/line)
                (map #(count (lookup/select :sweeper.ui/cell %))))
           [2 2])))

  (testing "Clicking the first tile reveals it"
    (is (= (->> (ui/render {:tiles [{:id 1} {:id 2} {:id 3} {:id 4}]
                            :cols 2})
                (lookup/select :sweeper.ui/cell)
                first
                lookup/attrs
                :actions
                :click)
           [[:action/reveal-tile 1]])))

  (testing "Renders revealed tile"
    (is (= (->> (ui/render {:tiles [{:id 1 :revealed? true} {:id 2} {:id 3} {:id 4}]
                            :cols 2})
                (lookup/select :sweeper.ui/cell)
                first)
           [:sweeper.ui/cell {:covered? false}])))

  (testing "Renders revealed mine"
    (is (= (->> (ui/render {:tiles [{:id 1 :revealed? true :mine? true} {:id 2} {:id 3} {:id 4}]
                            :cols 2})
                (lookup/select :sweeper.ui/cell.mine))
           [[:sweeper.ui/cell
             {:covered? false
              :class #{"mine"}}]]))))
