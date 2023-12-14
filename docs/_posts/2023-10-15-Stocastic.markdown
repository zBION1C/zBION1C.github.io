---
layout: post
title:  "Stochastic processes"
date:   2023-10-15 18:39:32 +0200
categories: statistics
tag: thesis
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
## Stochastic processes and stochastic differential equation

A **Stochastic process** or **random process** is a mathematical object usually defines as a sequence of random variables where the index of the variable is interpreted as the time. **Stochastic processes** are widely used as mathematical models of systems and phenomena that appear to have a random behaviour.

Some of the most famous stochastic processes are:
- The Wiener process (also know as **Brownian motion process**) used to model the price changes on the stock market.
- The **Poisson process** used to model for example the number of calls occuring in a certain period of time.

A **Stochastic differential equation** is a *differential equation* in which one or more of the terms is a stochastic process, resulting in a solution which is also a stochastic process. Intuitevely they are just a differential equation in which the difference of $$\delta = x_i - x_{i+1}$$ is random, and not fixed.
Stochastic differential equation are used to define well known stochastic processes.

The **Gemotric Brownian motion** is defined with the following *SDE*
<center>$$dS_t=\mu S_tdt+\sigma S_t dW_t$$</center>
where $$W_t$$ is the *Wiener process*. This process is used to model stock prices in the *Black–Scholes* model. 

The **Ornstein–Uhlenbeck process** is defined with the follinw *SDE*
<center>$$X_t=\theta(\mu - x_t)dt+\sigma dW_t$$</center>
where $$W_t$$ is the *Wiener process*. This process has applications in financial mathematics and was originally used to model the velocity of a massive *Brownian particle* in physics,

