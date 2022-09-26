self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Ul:function Ul(d,e){this.a=d
this.b=e},Um:function Um(d,e){this.a=d
this.b=e},IB:function IB(d,e,f){this.a=d
this.b=e
this.c=f},mD:function mD(d,e,f){var _=this
_.e=0
_.cd$=d
_.ae$=e
_.a=f},RD:function RD(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.F=d
_.q=e
_.D=f
_.ad=g
_.a6=h
_.aN=i
_.aW=j
_.bB=k
_.bI=l
_.ct=!1
_.cu=m
_.cc$=n
_.Y$=o
_.bY$=p
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
_.ch=q
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},Zs:function Zs(){},Zt:function Zt(){},
aLX(d,e,f){return new B.uq(B.kG(f.a,f.b,0),null,!0,null,d,e)},
aMe(d,e,f){return new A.Uk(f,d,e)},
Uk:function Uk(d,e,f){this.x=d
this.c=e
this.a=f}},C,B,D
A=a.updateHolder(c[16],A)
C=c[2]
B=c[0]
D=c[95]
A.Ul.prototype={
j(d){return"WrapAlignment."+this.b}}
A.Um.prototype={
j(d){return"WrapCrossAlignment."+this.b}}
A.IB.prototype={}
A.mD.prototype={}
A.RD.prototype={
salr(d,e){if(this.F===e)return
this.F=e
this.T()},
siS(d){if(this.q===d)return
this.q=d
this.T()},
sa_T(d,e){if(this.D===e)return
this.D=e
this.T()},
sast(d){if(this.ad===d)return
this.ad=d
this.T()},
sasA(d){if(this.a6===d)return
this.a6=d
this.T()},
sakR(d){if(this.aN===d)return
this.aN=d
this.T()},
eH(d){if(!(d.e instanceof A.mD))d.e=new A.mD(null,null,C.l)},
e5(d){return this.Gn(d)},
Dh(d){switch(this.F.a){case 0:return d.a
case 1:return d.b}},
Dg(d){switch(this.F.a){case 0:return d.b
case 1:return d.a}},
a8z(d,e){switch(this.F.a){case 0:return new B.n(d,e)
case 1:return new B.n(e,d)}},
a8c(d,e,f){var x=e-f
switch(this.aN.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
c5(d){return this.a6h(d)},
a6h(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.F.a){case 0:x=d.b
w=new B.ax(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ax(0,1/0,0,x)
break
default:w=null
x=0}v=k.Y$
for(u=B.k(k).h("ao.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aII(v,w)
n=k.Dh(o)
m=k.Dg(o)
if(p>0&&r+n+k.D>x){t=Math.max(t,r)
s+=q+k.a6
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.D;++p
l=v.e
l.toString
v=u.a(l).ae$}s+=q
t=Math.max(t,r)
switch(k.F.a){case 0:return d.bF(new B.V(t,s))
case 1:return d.bF(new B.V(s,t))}},
bu(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.x.prototype.gZ.call(b1))
b1.ct=!1
x=b1.Y$
if(x==null){b1.k3=new B.V(B.K(0,b2.a,b2.b),B.K(0,b2.c,b2.d))
return}switch(b1.F.a){case 0:w=b2.b
v=new B.ax(0,w,0,1/0)
u=b1.aW===C.a2&&!0
t=b1.bB===C.nB&&!0
break
case 1:w=b2.d
v=new B.ax(0,1/0,0,w)
u=b1.bB===C.nB&&!0
t=b1.aW===C.a2&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.D
r=b1.a6
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.cB(v,!0)
j=x.k3
j.toString
i=b1.Dh(j)
j=x.k3
j.toString
h=b1.Dg(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.IB(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ae$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.IB(m,l,k))}g=q.length
switch(b1.F.a){case 0:j=b1.k3=b2.bF(new B.V(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.bF(new B.V(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.ct=f<o||e<n
d=Math.max(0,e-n)
switch(b1.ad.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.Y$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.q.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.k3
a9.toString
i=b1.Dh(a9)
a9=x.k3
a9.toString
b0=b1.a8c(t,l,b1.Dg(a9))
if(u)a8-=i
j.a=b1.a8z(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ae$}a2=t?a2-a1:a2+(l+a1)}},
cX(d,e){return this.uD(d,e)},
aB(d,e){var x,w=this,v=w.ct&&w.bI!==C.E,u=w.cu
if(v){v=w.cx
v===$&&B.b()
x=w.k3
u.sau(0,d.jH(v,e,new B.A(0,0,0+x.a,0+x.b),w.gUb(),w.bI,u.a))}else{u.sau(0,null)
w.qD(d,e)}},
m(){this.cu.sau(0,null)
this.i3()}}
A.Zs.prototype={
an(d){var x,w,v
this.e1(d)
x=this.Y$
for(w=y.e;x!=null;){x.an(d)
v=x.e
v.toString
x=w.a(v).ae$}},
ah(d){var x,w,v
this.dF(0)
x=this.Y$
for(w=y.e;x!=null;){x.ah(0)
v=x.e
v.toString
x=w.a(v).ae$}}}
A.Zt.prototype={}
A.Uk.prototype={
aD(d){var x=B.dV(d)
x=new A.RD(C.ac,D.hz,0,D.hz,this.x,D.AB,x,C.cZ,C.E,B.at(),0,null,null,B.at())
x.aC()
x.N(0,null)
return x},
aF(d,e){var x
e.salr(0,C.ac)
e.siS(D.hz)
e.sa_T(0,0)
e.sast(D.hz)
e.sasA(this.x)
e.sakR(D.AB)
x=B.dV(d)
if(e.aW!=x){e.aW=x
e.T()}if(e.bB!==C.cZ){e.bB=C.cZ
e.T()}if(C.E!==e.bI){e.bI=C.E
e.al()
e.b6()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.fu,[A.Ul,A.Um])
u(A.IB,B.u)
u(A.mD,B.oZ)
u(A.Zs,B.E)
u(A.Zt,A.Zs)
u(A.RD,A.Zt)
u(A.Uk,B.dN)
x(A.Zs,B.ao)
w(A.Zt,B.d1)})()
B.bH(b.typeUniverse,JSON.parse('{"mD":{"fC":[],"eS":["E"],"d0":[]},"Ul":{"Y":[]},"Um":{"Y":[]},"RD":{"d1":["E","mD"],"E":[],"ao":["E","mD"],"x":[],"U":[],"ar":[],"ao.1":"mD","d1.1":"mD","ao.0":"E"},"Uk":{"dN":[],"ay":[],"e":[]}}'))
var y={a:B.C("ax"),l:B.C("l<IB>"),e:B.C("mD")};(function constants(){D.hz=new A.Ul(0,"start")
D.AB=new A.Um(0,"start")})()}
$__dart_deferred_initializers__["Jlh1C5ZebpwsyfqAPLqFfwO4mlc="] = $__dart_deferred_initializers__.current
