# 2D Isign modelを用いた機械学習のお勉強

## 資料

* http://www.slab.phys.nagoya-u.ac.jp/uwaha/statiii10-4.pdf
* https://github.com/biyori-sh/IsingModel-MonteCarlo/blob/master/Ising2d_MC.ipynb

## Hamiltonian

イジング模型は力学変数としてスピン`\sigma`を持つ磁性体の最も簡単な模型である。
`\sigma`はスピンのアップとダウンに対応して`+1`か`-1`の値を取る。
ハミルトニアンは
```math
H = - J \sum_{<i,j>} \sigma_i \sigma_j - B \sum_i \sigma_i
```
第1項は結合定数`J`の交換相互作用を表す。`<i,j>`は`i`番目のスピンの最近傍の組を意味し、例えば2次元正方格子だと`i=(x,y)`のとき
```math
j=((x, y + 1), (x + 1, y), (x, y-1), (x-1, y))
```
となる。第2項は外部磁場`B`によるゼーマン効果を表す。

分配関数はカノニカルアンサンブル
```math
Z[\beta, B] = \sum e^{-\beta H}
```
で与えられる。`\beta = 1/(k_B T)`は逆温度で、自然単位系ではボルツマン定数を`k_B=1`と置く。
また和はスピンが取りうる全ての状態`\phi=(\sigma_1=\pm 1, \cdots, \sigma_N=\pm 1)`について取る。
          
## マルコフ過程と詳細釣り合いの原理

ある状態から別の状態に遷移する確率が現在の状態にしか依存しないような確率過程を**マルコフ過程**という。
すなわち
```math
\begin{align}
  v_i = p_{ij} v_j
\end{align}
```
ここで$p_{ij}$は

ある遷移確率行列$P$と固有状態ベクトル$\phi$があって、
\begin{align}
  P \phi = \phi,
\end{align}
となるとき、$\phi$は熱平衡状態である。
