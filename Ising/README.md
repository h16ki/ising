# Isign modelを用いた機械学習のお勉強

## Hamiltonian



## マルコフ過程と詳細釣り合いの原理

ある状態から別の状態に遷移する確率が現在の状態にしか依存しないような確率過程を**マルコフ過程**という。
すなわち
```math
\begin{align}
  v_i = p_{ij} v_j
\end{align}
```
ここで$p_{ij}$は
<img src=
"https://render.githubusercontent.com/render/math?math=%5Cdisplaystyle+%5Cbegin%7Balign%2A%7D%0AR%28g%29+%26%3D+%5Cfrac%7B1%7D%7Bn%7D+%5Csum_%7Bi%3D1%7D%5E%7Bn%7D+%5Cell%28y_i%2Cg%28x_i%29%29%5C%5C%0A%26%3D%5Cfrac%7B1%7D%7B2n%7D+%28%5Cmathbf%7BX%7D%5Cboldsymbol%7Bw%7D-%5Cmathbf%7By%7D%29%5ET+%28%5Cmathbf%7BX%7D%5Cboldsymbol%7Bw%7D-%5Cmathbf%7By%7D%29%0A%5Cend%7Balign%2A%7D%0A" 
alt="\begin{align*}
R(g) &= \frac{1}{n} \sum_{i=1}^{n} \ell(y_i,g(x_i))\\
&=\frac{1}{2n} (\mathbf{X}\boldsymbol{w}-\mathbf{y})^T (\mathbf{X}\boldsymbol{w}-\mathbf{y})
\end{align*}
">

ある遷移確率行列$P$と固有状態ベクトル$\phi$があって、
\begin{align}
  P \phi = \phi,
\end{align}
となるとき、$\phi$は熱平衡状態である。
