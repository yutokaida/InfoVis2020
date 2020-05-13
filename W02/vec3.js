class Vec3
{
    constructor(x,y,z)
    {
	this.x = x;
	this.y = y;
	this.z = z;
    }
    
    //add method
    add(v)
    {
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;

	return this;
    }

    //sub method
    sub(v)
    {
	this.x -= v.x;
	this.y -= v.y;
	this.z -= v.z;

	return this;
    }

    //mul method
    mul(v)
    {
	this.x = this.x * v.x;
	this.y = this.y * v.y;
	this.z = this.z * v.z;

	return this;	
    }

    //dim method
    dim()
    {
	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    
    //sum method
    sum()
    {
	return this.x + this.y + this.z;
    }

//min method

    min()
    {
	var min;

	if(this.x<=this.y)
	{
	    if(this.x<=this.z)
	    {
		min = this.x;
	    }
	    else
	    {
		min = this.z;
	    }
	}
	else
	{
	    if(this.y<=this.z)
	    {
		min = this.y;
	    }
	    else
	    {
		min = this.z;
	    }
	}
	
	return min;
    }

    //mid method
    mid()
    {
	var mid;

	if(this.x<=this.y)
	{
	    if(this.y<=this.z)
	    {
		mid = this.y;
	    }
	    else

	    {
		mid = this.z;
	    }
	}
	else 
	{
	    if(this.x<=this.z)
	    {
		mid = this.x;
	    }
	    else
	    {
		mid = this.z;
	    }
	}

	return mid;
    }


    //max method
    max()
    {
	var max;

	if(this.x<=this.y)
	{
	    if(this.z<=this.y)
	    {
		max = this.y;
	    }
	    else
	    {
		max = this.z;
	    }
	}
	else 
	{
	    if(this.x<=this.z)
	    {
		max = this.z;
	    }
	    else
	    {
		max = this.x;
	    }
	}

	return max;
    }

}

function AreaOfTriangle(v0,v1,v2)
{
    var haight;
    var v3 = new Vec3(0,0,0)
    var v4 = new Vec3(0,0,0)
    
    v3 = v1.sub(v0);
    document.getElementById("target4").innerHTML = "vecter1-vecter0(" + v3.x + "," + v3.y + "," + v3.z + ")" + "<br>";
    
    v4 = v2.sub(v0);
    document.getElementById("target5").innerHTML = "vecter2-vecter0(" + v4.x + "," + v4.y + "," + v4.z + ")" + "<br>";


    return Math.sqrt((v3.y * v4.z - v3.z * v4.y) * (v3.y * v4.z - v3.z * v4.y) + (v3.z * v4.x - v3.x * v4.z) * (v3.z * v4.x - v3.x * v4.z) + (v3.x * v4.y - v3.y * v4.x) * (v3.x * v4.y - v3.y * v4.x))/2
}
    
    


    
    
