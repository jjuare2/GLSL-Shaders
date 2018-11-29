varying vec3 vectorN;

void main()
{
	vectorN = gl_Normal;
	gl_Position = ftransform();

}