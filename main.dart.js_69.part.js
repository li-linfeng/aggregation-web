self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={lx:function lx(d,e,f){this.a=d
this.b=e
this.c=f},L0:function L0(){},
aSQ(d){var x,w,v,u,t,s,r
if(d==null)return new A.co(null,y.b)
x=y.P.a(C.b9.e6(0,d))
w=J.cL(x)
v=y.N
u=A.F(v,y.a)
for(t=J.aD(w.gbJ(x)),s=y.j;t.t();){r=t.gL(t)
u.l(0,r,A.fM(s.a(w.i(x,r)),!0,v))}return new A.co(u,y.b)},
r5:function r5(d,e,f){this.a=d
this.b=e
this.c=f},
a3e:function a3e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3f:function a3f(d){this.a=d},
Dy(d,e,f,g,h){var x=new B.Pd(h,g,A.a([],y.v),A.a([],y.u))
x.a4D(d,e,f,g,h)
return x},
Pd:function Pd(d,e,f,g){var _=this
_.z=_.y=null
_.Q=d
_.as=e
_.at=null
_.ax=$
_.ay=null
_.ch=0
_.CW=null
_.cx=!1
_.a=f
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=g},
agp:function agp(d,e){this.a=d
this.b=e},
agq:function agq(d,e){this.a=d
this.b=e},
ago:function ago(d){this.a=d}},J,A,C,E,D
B=a.updateHolder(c[33],B)
J=c[1]
A=c[0]
C=c[2]
E=c[53]
D=c[49]
B.lx.prototype={
k(d,e){var x=this
if(e==null)return!1
if(J.ac(e)!==A.H(x))return!1
return e instanceof B.lx&&e.a===x.a&&e.b===x.b&&e.c===x.c},
gA(d){return A.a3(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.d(this.c)+")"}}
B.L0.prototype={
oN(d,e){return B.Dy(null,this.iI(d,e,null),d.b,null,d.c)},
oM(d,e,f){return B.Dy(null,this.iI(e,null,f),e.b,null,e.c)},
iI(d,e,f){return this.ac9(d,e,f)},
ac9(d,e,f){var x=0,w=A.T(y.p),v,u=2,t,s,r,q,p,o,n
var $async$iI=A.N(function(g,h){if(g===1){t=h
x=u}while(true)switch(x){case 0:x=e!=null?3:4
break
case 3:s=null
u=6
x=9
return A.W(d.a.zS(d.b),$async$iI)
case 9:s=h
u=2
x=8
break
case 6:u=5
o=t
if(A.ag(o) instanceof A.no){p=$.i8.jy$
p===$&&A.b()
p.qQ(d)
throw o}else throw o
x=8
break
case 5:x=2
break
case 8:if(s==null){p=$.i8.jy$
p===$&&A.b()
p.qQ(d)
throw A.c(A.a1("Unable to read data"))}v=e.$1(s)
x=1
break
case 4:r=null
u=11
x=14
return A.W(d.a.eT(0,d.b),$async$iI)
case 14:r=h
u=2
x=13
break
case 11:u=10
n=t
if(A.ag(n) instanceof A.no){p=$.i8.jy$
p===$&&A.b()
p.qQ(d)
throw n}else throw n
x=13
break
case 10:x=2
break
case 13:if(r==null){p=$.i8.jy$
p===$&&A.b()
p.qQ(d)
throw A.c(A.a1("Unable to read data"))}f.toString
v=f.$1(A.er(r.buffer,0,null))
x=1
break
case 1:return A.R(v,w)
case 2:return A.Q(t,w)}})
return A.S($async$iI,w)}}
B.r5.prototype={
glu(){return this.a},
ri(d){var x,w={},v=d.a
if(v==null)v=$.KB()
w.a=w.b=null
v.api("AssetManifest.json",B.b35(),y.g).b4(new B.a3e(w,this,d,v),y.H).iW(new B.a3f(w))
x=w.a
if(x!=null)return x
x=new A.a8($.a7,y.E)
w.b=new A.aG(x,y.z)
return x},
a65(d,e,f){var x,w,v,u=e.b
if(u==null||f==null||J.iS(f))return d
x=E.aFq(y.i,y.N)
for(w=J.aD(f);w.t();){v=w.gL(w)
x.l(0,this.PJ(v),v)}u.toString
return this.a7M(x,u)},
a7M(d,e){var x,w,v
if(d.ty(e)){x=d.i(0,e)
x.toString
return x}w=d.aoW(e)
v=d.amS(e)
if(w==null)return d.i(0,v)
if(v==null)return d.i(0,w)
if(e<2||e>(w+v)/2)return d.i(0,v)
else return d.i(0,w)},
PJ(d){var x,w,v,u
if(d===this.a)return 1
x=A.l8(d,0,null)
w=x.gmZ().length>1?x.gmZ()[x.gmZ().length-2]:""
v=$.aPt().r_(w)
if(v!=null&&v.b.length-1>0){u=v.b[1]
u.toString
return A.qR(u)}return 1},
k(d,e){if(e==null)return!1
if(J.ac(e)!==A.H(this))return!1
return e instanceof B.r5&&e.glu()===this.glu()&&!0},
gA(d){return A.a3(this.glu(),this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetImage(bundle: "+A.d(this.b)+', name: "'+this.glu()+'")'}}
B.Pd.prototype={
a4D(d,e,f,g,h){var x=this
x.d=f
e.eq(x.ga9a(),new B.agp(x,g),y.H)
if(d!=null)x.y=d.HX(x.gXH(),new B.agq(x,g))},
a9b(d){this.z=d
if(this.a.length!==0)this.pW()},
abA(d){var x,w,v,u=this
u.cx=!1
if(u.a.length===0)return
x=u.ay
if(x!=null){w=u.ax
w===$&&A.b()
w=d.a-w.a>=x.a}else w=!0
if(w){x=u.at
u.Ow(new D.i1(x.gij(x).ey(0),u.Q,u.d))
u.ax=d
x=u.at
u.ay=x.gGP(x)
x=u.at
x.gij(x).m()
u.at=null
v=C.h.hx(u.ch,u.z.gr0())
if(u.z.gAF()===-1||v<=u.z.gAF())u.pW()
return}x.toString
w=u.ax
w===$&&A.b()
u.CW=A.cE(new A.aR(C.d.aZ((x.a-(d.a-w.a))*$.aNU)),new B.ago(u))},
pW(){var x=0,w=A.T(y.H),v,u=2,t,s=this,r,q,p,o,n
var $async$pW=A.N(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:o=s.at
if(o!=null)o.gij(o).m()
s.at=null
u=4
x=7
return A.W(s.z.rU(),$async$pW)
case 7:s.at=e
u=2
x=6
break
case 4:u=3
n=t
r=A.ag(n)
q=A.az(n)
s.n7(A.bg("resolving an image frame"),r,s.as,!0,q)
x=1
break
x=6
break
case 3:x=2
break
case 6:if(s.z.gr0()===1){if(s.a.length===0){x=1
break}o=s.at
s.Ow(new D.i1(o.gij(o).ey(0),s.Q,s.d))
o=s.at
o.gij(o).m()
s.at=null
x=1
break}s.Ox()
case 1:return A.R(v,w)
case 2:return A.Q(t,w)}})
return A.S($async$pW,w)},
Ox(){if(this.cx)return
this.cx=!0
$.ci.Bj(this.gabz())},
Ow(d){this.Kh(d);++this.ch},
W(d,e){var x,w=this
if(w.a.length===0){x=w.z
if(x!=null)x=w.b==null||x.gr0()>1
else x=!1}else x=!1
if(x)w.pW()
w.L0(0,e)},
M(d,e){var x,w=this
w.L1(0,e)
if(w.a.length===0){x=w.CW
if(x!=null)x.ao(0)
w.CW=null}},
xx(){var x,w=this
w.a0W()
if(w.w){x=w.y
if(x!=null)x.lx(null)
x=w.y
if(x!=null)x.ao(0)
w.y=null}}}
var z=a.updateTypes(["~(fE)","~(aR)","~(eC)","al<ap<h,o<h>>?>(h?)"])
B.a3e.prototype={
$1(d){var x,w=this,v=w.b,u=v.glu(),t=d==null?null:J.av(d,v.glu())
t=v.a65(u,w.c,t)
t.toString
x=new B.lx(w.d,t,v.PJ(t))
v=w.a
u=v.b
if(u!=null)u.c1(0,x)
else v.a=new A.co(x,y.f)},
$S:513}
B.a3f.prototype={
$2(d,e){this.a.b.f7(d,e)},
$S:22}
B.agp.prototype={
$2(d,e){this.a.n7(A.bg("resolving an image codec"),d,this.b,!0,e)},
$S:22}
B.agq.prototype={
$2(d,e){this.a.n7(A.bg("loading an image"),d,this.b,!0,e)},
$S:22}
B.ago.prototype={
$0(){this.a.Ox()},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_1i
x(B,"b35","aSQ",3)
var u
w(u=B.Pd.prototype,"ga9a","a9b",0)
w(u,"gabz","abA",1)
v(u,"gud","W",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.lx,A.u)
x(B.L0,D.eb)
x(B.r5,B.L0)
x(B.a3e,A.be)
w(A.dU,[B.a3f,B.agp,B.agq])
x(B.Pd,D.nx)
x(B.ago,A.d4)})()
A.bH(b.typeUniverse,JSON.parse('{"L0":{"eb":["lx"]},"r5":{"eb":["lx"],"eb.T":"lx"}}'))
var y=(function rtii(){var x=A.C
return{p:x("fE"),v:x("l<eC>"),u:x("l<~()>"),a:x("o<h>"),j:x("o<@>"),P:x("ap<h,@>"),N:x("h"),f:x("co<lx>"),b:x("co<ap<h,o<h>>?>"),z:x("aG<lx>"),E:x("a8<lx>"),i:x("M"),g:x("ap<h,o<h>>?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"b4U","aPt",()=>A.bi("/?(\\d+(\\.\\d*)?)x$",!0,!1))})()}
$__dart_deferred_initializers__["hOVQdJBiYsiTx3uabrsyNZVa4mg="] = $__dart_deferred_initializers__.current
