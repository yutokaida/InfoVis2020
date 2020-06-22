program conv
  implicit none

  integer, parameter :: SP = kind(1.0)
  integer, parameter :: DP = selected_real_kind(2*precision(1.0_SP))

  integer :: n,a,c,e,g,h,i,num
  real(DP) :: f!a,b,c,d,e
  character(len=20) :: f_name, value, b,d
  

  open(10,file='data.csv')
  open(11,file='data1.csv', status='replace')
  do n=1,330
     print*, "OK4"
     read(10,'(i4,a1,i1,a1,i3,f5.2,i2,i2,i2)') a, b, c, d, e, f, g, h, i
     print*, "OK4"
     print*,"a=",a
     print*,"b=",b
     print*,"c=",c
     print*,"d=",d
     print*,"e=",e
     print*,"f=",f
     print*,"g=",g
     print*,"h=",h
     print*,"i=",i
     if(g.eq.0.0) then
        print*, "OK5"
        num = f
        write(11,'(i4,a1,i3)') a, ',', num
     end if
  end do
  print*, "complete"
end program conv
