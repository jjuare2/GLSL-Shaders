varying vec3 vectorN;
uniform vec3 direction;

void main()
{
	float lighting;
	vec4 toonShade;
	lighting = dot(direction , vectorN);

	if (lighting > 1.00)
		toonShade = vec4(0.5, 1.0, 1.0, 0.5);
	else if (lighting > 0.5)
		toonShade = vec4( 0.3, 0.6, 0.6, 0.5);
	else if (lighting > 0.25)
		toonShade = vec4(0.2, 0.4, 0.4, 0.5);
	else
		toonShade = vec4(0.1, 0.2, 0.2, 0.5);
	gl_FragColor = toonShade;

}