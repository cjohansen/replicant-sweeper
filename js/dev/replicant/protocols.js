// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
replicant.protocols.IRender = function(){};

var replicant$protocols$IRender$create_text_node$dyn_9528 = (function (this$,text){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.create_text_node[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,text);
} else {
var m__5392__auto__ = (replicant.protocols.create_text_node["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,text);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.create-text-node",this$);
}
}
});
replicant.protocols.create_text_node = (function replicant$protocols$create_text_node(this$,text){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","create-text-node","replicant.protocols/create-text-node",984762211,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,text);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$create_text_node$arity$2 == null)))))){
return this$.replicant$protocols$IRender$create_text_node$arity$2(this$,text);
} else {
return replicant$protocols$IRender$create_text_node$dyn_9528.call(null,this$,text);
}
}
});

var replicant$protocols$IRender$create_element$dyn_9529 = (function (this$,tag_name,options){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.create_element[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,tag_name,options);
} else {
var m__5392__auto__ = (replicant.protocols.create_element["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,tag_name,options);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.create-element",this$);
}
}
});
replicant.protocols.create_element = (function replicant$protocols$create_element(this$,tag_name,options){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","create-element","replicant.protocols/create-element",-546701046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,tag_name,options);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$create_element$arity$3 == null)))))){
return this$.replicant$protocols$IRender$create_element$arity$3(this$,tag_name,options);
} else {
return replicant$protocols$IRender$create_element$dyn_9529.call(null,this$,tag_name,options);
}
}
});

var replicant$protocols$IRender$set_style$dyn_9530 = (function (this$,el,k,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.set_style[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,k,v);
} else {
var m__5392__auto__ = (replicant.protocols.set_style["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.set-style",this$);
}
}
});
replicant.protocols.set_style = (function replicant$protocols$set_style(this$,el,k,v){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","set-style","replicant.protocols/set-style",1371207247,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,k,v);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$set_style$arity$4 == null)))))){
return this$.replicant$protocols$IRender$set_style$arity$4(this$,el,k,v);
} else {
return replicant$protocols$IRender$set_style$dyn_9530.call(null,this$,el,k,v);
}
}
});

var replicant$protocols$IRender$remove_style$dyn_9531 = (function (this$,el,k){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.remove_style[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,k);
} else {
var m__5392__auto__ = (replicant.protocols.remove_style["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,k);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.remove-style",this$);
}
}
});
replicant.protocols.remove_style = (function replicant$protocols$remove_style(this$,el,k){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","remove-style","replicant.protocols/remove-style",31335845,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,k);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$remove_style$arity$3 == null)))))){
return this$.replicant$protocols$IRender$remove_style$arity$3(this$,el,k);
} else {
return replicant$protocols$IRender$remove_style$dyn_9531.call(null,this$,el,k);
}
}
});

var replicant$protocols$IRender$add_class$dyn_9532 = (function (this$,el,cn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.add_class[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,cn);
} else {
var m__5392__auto__ = (replicant.protocols.add_class["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,cn);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.add-class",this$);
}
}
});
replicant.protocols.add_class = (function replicant$protocols$add_class(this$,el,cn){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","add-class","replicant.protocols/add-class",620888870,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,cn);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$add_class$arity$3 == null)))))){
return this$.replicant$protocols$IRender$add_class$arity$3(this$,el,cn);
} else {
return replicant$protocols$IRender$add_class$dyn_9532.call(null,this$,el,cn);
}
}
});

var replicant$protocols$IRender$remove_class$dyn_9533 = (function (this$,el,cn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.remove_class[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,cn);
} else {
var m__5392__auto__ = (replicant.protocols.remove_class["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,cn);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.remove-class",this$);
}
}
});
replicant.protocols.remove_class = (function replicant$protocols$remove_class(this$,el,cn){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","remove-class","replicant.protocols/remove-class",-246602798,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,cn);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$remove_class$arity$3 == null)))))){
return this$.replicant$protocols$IRender$remove_class$arity$3(this$,el,cn);
} else {
return replicant$protocols$IRender$remove_class$dyn_9533.call(null,this$,el,cn);
}
}
});

var replicant$protocols$IRender$set_attribute$dyn_9534 = (function (this$,el,a,v,opt){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.set_attribute[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,a,v,opt);
} else {
var m__5392__auto__ = (replicant.protocols.set_attribute["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,a,v,opt);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.set-attribute",this$);
}
}
});
replicant.protocols.set_attribute = (function replicant$protocols$set_attribute(this$,el,a,v,opt){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","set-attribute","replicant.protocols/set-attribute",-1168739265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,a,v,opt);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$set_attribute$arity$5 == null)))))){
return this$.replicant$protocols$IRender$set_attribute$arity$5(this$,el,a,v,opt);
} else {
return replicant$protocols$IRender$set_attribute$dyn_9534.call(null,this$,el,a,v,opt);
}
}
});

var replicant$protocols$IRender$remove_attribute$dyn_9535 = (function (this$,el,a){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.remove_attribute[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,a);
} else {
var m__5392__auto__ = (replicant.protocols.remove_attribute["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,a);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.remove-attribute",this$);
}
}
});
replicant.protocols.remove_attribute = (function replicant$protocols$remove_attribute(this$,el,a){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","remove-attribute","replicant.protocols/remove-attribute",1352379510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,a);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$remove_attribute$arity$3 == null)))))){
return this$.replicant$protocols$IRender$remove_attribute$arity$3(this$,el,a);
} else {
return replicant$protocols$IRender$remove_attribute$dyn_9535.call(null,this$,el,a);
}
}
});

var replicant$protocols$IRender$set_event_handler$dyn_9536 = (function (this$,el,event,handler){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.set_event_handler[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,event,handler);
} else {
var m__5392__auto__ = (replicant.protocols.set_event_handler["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,event,handler);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.set-event-handler",this$);
}
}
});
replicant.protocols.set_event_handler = (function replicant$protocols$set_event_handler(this$,el,event,handler){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","set-event-handler","replicant.protocols/set-event-handler",-547103902,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,event,handler);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$set_event_handler$arity$4 == null)))))){
return this$.replicant$protocols$IRender$set_event_handler$arity$4(this$,el,event,handler);
} else {
return replicant$protocols$IRender$set_event_handler$dyn_9536.call(null,this$,el,event,handler);
}
}
});

var replicant$protocols$IRender$remove_event_handler$dyn_9537 = (function (this$,el,event){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.remove_event_handler[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,event);
} else {
var m__5392__auto__ = (replicant.protocols.remove_event_handler["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,event);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.remove-event-handler",this$);
}
}
});
replicant.protocols.remove_event_handler = (function replicant$protocols$remove_event_handler(this$,el,event){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","remove-event-handler","replicant.protocols/remove-event-handler",1301579080,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,event);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$remove_event_handler$arity$3 == null)))))){
return this$.replicant$protocols$IRender$remove_event_handler$arity$3(this$,el,event);
} else {
return replicant$protocols$IRender$remove_event_handler$dyn_9537.call(null,this$,el,event);
}
}
});

var replicant$protocols$IRender$insert_before$dyn_9538 = (function (this$,el,child_node,reference_node){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.insert_before[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,child_node,reference_node);
} else {
var m__5392__auto__ = (replicant.protocols.insert_before["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,child_node,reference_node);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.insert-before",this$);
}
}
});
replicant.protocols.insert_before = (function replicant$protocols$insert_before(this$,el,child_node,reference_node){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","insert-before","replicant.protocols/insert-before",255701854,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,child_node,reference_node);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$insert_before$arity$4 == null)))))){
return this$.replicant$protocols$IRender$insert_before$arity$4(this$,el,child_node,reference_node);
} else {
return replicant$protocols$IRender$insert_before$dyn_9538.call(null,this$,el,child_node,reference_node);
}
}
});

var replicant$protocols$IRender$append_child$dyn_9539 = (function (this$,el,child_node){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.append_child[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,child_node);
} else {
var m__5392__auto__ = (replicant.protocols.append_child["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,child_node);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.append-child",this$);
}
}
});
replicant.protocols.append_child = (function replicant$protocols$append_child(this$,el,child_node){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","append-child","replicant.protocols/append-child",-871268718,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,child_node);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$append_child$arity$3 == null)))))){
return this$.replicant$protocols$IRender$append_child$arity$3(this$,el,child_node);
} else {
return replicant$protocols$IRender$append_child$dyn_9539.call(null,this$,el,child_node);
}
}
});

var replicant$protocols$IRender$remove_child$dyn_9540 = (function (this$,el,child_node){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.remove_child[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,child_node);
} else {
var m__5392__auto__ = (replicant.protocols.remove_child["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,child_node);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.remove-child",this$);
}
}
});
replicant.protocols.remove_child = (function replicant$protocols$remove_child(this$,el,child_node){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","remove-child","replicant.protocols/remove-child",-2065052402,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,child_node);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$remove_child$arity$3 == null)))))){
return this$.replicant$protocols$IRender$remove_child$arity$3(this$,el,child_node);
} else {
return replicant$protocols$IRender$remove_child$dyn_9540.call(null,this$,el,child_node);
}
}
});

var replicant$protocols$IRender$on_transition_end$dyn_9541 = (function (this$,el,f){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.on_transition_end[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,f);
} else {
var m__5392__auto__ = (replicant.protocols.on_transition_end["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,f);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.on-transition-end",this$);
}
}
});
replicant.protocols.on_transition_end = (function replicant$protocols$on_transition_end(this$,el,f){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","on-transition-end","replicant.protocols/on-transition-end",-1368016388,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,f);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$on_transition_end$arity$3 == null)))))){
return this$.replicant$protocols$IRender$on_transition_end$arity$3(this$,el,f);
} else {
return replicant$protocols$IRender$on_transition_end$dyn_9541.call(null,this$,el,f);
}
}
});

var replicant$protocols$IRender$replace_child$dyn_9542 = (function (this$,el,insert_child,replace_child){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.replace_child[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,insert_child,replace_child);
} else {
var m__5392__auto__ = (replicant.protocols.replace_child["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,insert_child,replace_child);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.replace-child",this$);
}
}
});
replicant.protocols.replace_child = (function replicant$protocols$replace_child(this$,el,insert_child,replace_child){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","replace-child","replicant.protocols/replace-child",411778711,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,insert_child,replace_child);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$replace_child$arity$4 == null)))))){
return this$.replicant$protocols$IRender$replace_child$arity$4(this$,el,insert_child,replace_child);
} else {
return replicant$protocols$IRender$replace_child$dyn_9542.call(null,this$,el,insert_child,replace_child);
}
}
});

var replicant$protocols$IRender$remove_all_children$dyn_9543 = (function (this$,el){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.remove_all_children[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el);
} else {
var m__5392__auto__ = (replicant.protocols.remove_all_children["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.remove-all-children",this$);
}
}
});
replicant.protocols.remove_all_children = (function replicant$protocols$remove_all_children(this$,el){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","remove-all-children","replicant.protocols/remove-all-children",1448729164,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$remove_all_children$arity$2 == null)))))){
return this$.replicant$protocols$IRender$remove_all_children$arity$2(this$,el);
} else {
return replicant$protocols$IRender$remove_all_children$dyn_9543.call(null,this$,el);
}
}
});

var replicant$protocols$IRender$get_child$dyn_9544 = (function (this$,el,idx){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.get_child[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,el,idx);
} else {
var m__5392__auto__ = (replicant.protocols.get_child["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,el,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.get-child",this$);
}
}
});
replicant.protocols.get_child = (function replicant$protocols$get_child(this$,el,idx){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","get-child","replicant.protocols/get-child",-1508400696,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,el,idx);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$get_child$arity$3 == null)))))){
return this$.replicant$protocols$IRender$get_child$arity$3(this$,el,idx);
} else {
return replicant$protocols$IRender$get_child$dyn_9544.call(null,this$,el,idx);
}
}
});

var replicant$protocols$IRender$next_frame$dyn_9545 = (function (this$,f){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (replicant.protocols.next_frame[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,f);
} else {
var m__5392__auto__ = (replicant.protocols.next_frame["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.next-frame",this$);
}
}
});
replicant.protocols.next_frame = (function replicant$protocols$next_frame(this$,f){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,this$),cljs.core.with_meta(new cljs.core.Symbol("replicant.protocols","next-frame","replicant.protocols/next-frame",-1979859155,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,this$,f);
} else {
if((((!((this$ == null)))) && ((!((this$.replicant$protocols$IRender$next_frame$arity$2 == null)))))){
return this$.replicant$protocols$IRender$next_frame$arity$2(this$,f);
} else {
return replicant$protocols$IRender$next_frame$dyn_9545.call(null,this$,f);
}
}
});


//# sourceMappingURL=protocols.js.map
