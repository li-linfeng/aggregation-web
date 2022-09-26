self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aFk(d,e,f,g,h,i){return new A.Sr(i,g,e,h,d,f,null)},
Sr:function Sr(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.x=h
_.y=i
_.a=j},
amr:function amr(d,e,f){this.a=d
this.b=e
this.c=f},
zy:function zy(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a_5:function a_5(d,e){var _=this
_.ch=_.p3=null
_.CW=!1
_.d=_.c=_.b=_.a=_.cx=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
Iy:function Iy(d,e,f,g,h,i){var _=this
_.F=d
_.q=e
_.ad=f
_.a6=g
_.q$=h
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=i
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
axg:function axg(d,e){this.a=d
this.b=e},
axf:function axf(d,e){this.a=d
this.b=e},
K4:function K4(){},
a1l:function a1l(){},
a1m:function a1m(){}},D,B,C
A=a.updateHolder(c[48],A)
D=c[60]
B=c[0]
C=c[2]
A.Sr.prototype={
K(d){var x,w,v,u=this,t=null,s={},r=u.c,q=D.aOv(d,r,!1)
s.a=u.x
x=u.f==null&&D.aKX(d,r)
w=x?B.nR(d):u.f
v=D.alx(q,C.O,w,u.y,!1,u.w,t,t,t,new A.amr(s,u,q))
return x&&w!=null?D.aKW(v):v}}
A.zy.prototype={
aD(d){var x=new A.Iy(this.e,this.f,this.r,B.at(),null,B.at())
x.aC()
x.saX(null)
return x},
aF(d,e){var x
e.sda(this.e)
e.sbS(0,this.f)
x=this.r
if(x!==e.ad){e.ad=x
e.al()
e.b6()}},
cb(d){return new A.a_5(this,C.ab)}}
A.a_5.prototype={}
A.Iy.prototype={
sda(d){if(d===this.F)return
this.F=d
this.T()},
sbS(d,e){var x=this,w=x.q
if(e===w)return
if(x.b!=null)w.M(0,x.gxn())
x.q=e
if(x.b!=null)e.W(0,x.gxn())
x.T()},
abn(){this.al()
this.b6()},
eH(d){if(!(d.e instanceof B.d0))d.e=new B.d0()},
an(d){this.a4a(d)
this.q.W(0,this.gxn())},
ah(d){this.q.M(0,this.gxn())
this.a4b(0)},
gfe(){return!0},
gahq(){switch(B.bx(this.F).a){case 0:return this.k3.a
case 1:return this.k3.b}},
gacq(){var x=this,w=x.q$
if(w==null)return 0
switch(B.bx(x.F).a){case 0:return Math.max(0,w.k3.a-x.k3.a)
case 1:return Math.max(0,w.k3.b-x.k3.b)}},
NS(d){switch(B.bx(this.F).a){case 0:return new B.ax(0,1/0,d.c,d.d)
case 1:return new B.ax(d.a,d.b,0,1/0)}},
c5(d){var x=this.q$
if(x==null)return new B.V(B.K(0,d.a,d.b),B.K(0,d.c,d.d))
return d.bF(x.it(this.NS(d)))},
bu(){var x=this,w=y.a.a(B.x.prototype.gZ.call(x)),v=x.q$
if(v==null)x.k3=new B.V(B.K(0,w.a,w.b),B.K(0,w.c,w.d))
else{v.cB(x.NS(w),!0)
v=x.q$.k3
v.toString
x.k3=w.bF(v)}x.q.mh(x.gahq())
x.q.mg(0,x.gacq())},
tQ(d){var x=this
switch(x.F.a){case 0:return new B.n(0,d-x.q$.k3.b+x.k3.b)
case 2:return new B.n(0,-d)
case 3:return new B.n(d-x.q$.k3.a+x.k3.a,0)
case 1:return new B.n(-d,0)}},
QP(d){var x,w,v,u,t
switch(this.ad.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
if(!(w<0)){v=this.q$.k3
u=v.a
t=this.k3
x=x+u>t.a||w+v.b>t.b}else x=!0}else x=!0
return x}},
aB(d,e){var x,w,v,u,t=this
if(t.q$!=null){x=t.q.as
x.toString
x=t.tQ(x)
w=new A.axg(t,x)
v=t.a6
if(t.QP(x)){x=t.cx
x===$&&B.b()
u=t.k3
v.sau(0,d.jH(x,e,new B.A(0,0,0+u.a,0+u.b),w,t.ad,v.a))}else{v.sau(0,null)
w.$2(d,e)}}},
m(){this.a6.sau(0,null)
this.i3()},
dQ(d,e){var x=this.q.as
x.toString
x=this.tQ(x)
e.aO(0,x.a,x.b)},
ki(d){var x=this,w=x.q.as
w.toString
w=x.tQ(w)
if(x.QP(w)){w=x.k3
return new B.A(0,0,0+w.a,0+w.b)}return null},
cX(d,e){var x,w=this
if(w.q$!=null){x=w.q.as
x.toString
return d.me(new A.axf(w,e),w.tQ(x),e)}return!1},
pk(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gkD()
if(!(d instanceof B.E)){x=q.q.as
x.toString
return new D.q2(x,f)}w=B.jF(d.c4(0,q.q$),f)
x=q.q$.k3
x.toString
switch(q.F.a){case 0:v=q.k3.b
u=w.d
t=x.b-u
s=u-w.b
break
case 1:v=q.k3.a
t=w.a
s=w.c-t
break
case 2:v=q.k3.b
t=w.b
s=w.d-t
break
case 3:v=q.k3.a
u=w.c
t=x.a-u
s=u-w.a
break
default:t=null
s=null
v=null}r=t-(v-s)*e
return new D.q2(r,w.cK(q.tQ(r)))},
eJ(d,e,f,g){var x=this
if(!x.q.f.go2())return x.wF(d,e,f,g)
x.wF(d,null,f,D.aLc(d,e,f,x.q,g,x))},
t2(){return this.eJ(C.aj,null,C.A,null)},
nw(d){return this.eJ(C.aj,null,C.A,d)},
pt(d,e,f){return this.eJ(d,null,e,f)},
nx(d,e){return this.eJ(C.aj,d,C.A,e)},
Gs(d){var x
switch(B.bx(this.F).a){case 1:x=this.k3
return new B.A(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k3
return new B.A(-250,0,0+x.a+250,0+x.b)}},
$iEy:1}
A.K4.prototype={
an(d){var x
this.e1(d)
x=this.q$
if(x!=null)x.an(d)},
ah(d){var x
this.dF(0)
x=this.q$
if(x!=null)x.ah(0)}}
A.a1l.prototype={}
A.a1m.prototype={}
var z=a.updateTypes(["zy(a4,hI)","~()","~({curve:fW,descendant:x?,duration:aR,rect:A?})"])
A.amr.prototype={
$2(d,e){return new A.zy(this.c,e,C.O,this.a.a,null)},
$S:z+0}
A.axg.prototype={
$2(d,e){var x=this.a.q$
x.toString
d.dM(x,e.a2(0,this.b))},
$S:15}
A.axf.prototype={
$2(d,e){return this.a.q$.bQ(d,e)},
$S:11};(function aliases(){var x=A.K4.prototype
x.a4a=x.an
x.a4b=x.ah})();(function installTearOffs(){var x=a._instance_0u,w=a.installInstanceTearOff
var v
x(v=A.Iy.prototype,"gxn","abn",1)
w(v,"gt1",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eJ","t2","nw","pt","nx"],2,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Sr,B.ad)
u(B.dU,[A.amr,A.axg,A.axf])
v(A.zy,B.aZ)
v(A.a1l,B.xO)
v(A.a1m,A.a1l)
v(A.a_5,A.a1m)
v(A.K4,B.E)
v(A.Iy,A.K4)
x(A.K4,B.aT)
w(A.a1l,B.DN)
w(A.a1m,D.Uc)})()
B.bH(b.typeUniverse,JSON.parse('{"zy":{"aZ":[],"ay":[],"e":[]},"Sr":{"ad":[],"e":[]},"a_5":{"bV":[],"bs":[],"a4":[]},"Iy":{"E":[],"aT":["E"],"Ey":[],"x":[],"U":[],"ar":[]}}'))
var y={a:B.C("ax")}}
$__dart_deferred_initializers__["YRk9Vv5rK9i9heiiWioX5noFvv8="] = $__dart_deferred_initializers__.current
