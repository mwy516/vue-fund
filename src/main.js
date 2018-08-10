// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueParticles from 'vue-particles'
import 'font-awesome/css/font-awesome.min.css'
import './style/font.css'
import 'vue2-animate/dist/vue2-animate.min.css';
// import particles from 'particles.js'
// Vue.use(particles)

Vue.use(VueParticles);
Vue.config.productionTip = false;
/* eslint-disable */
require('./router/index.js');

FastClick.attach(document.body);
