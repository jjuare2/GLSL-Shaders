varying vec3 NormalV; 
varying vec3 vector;

void main(void)
{
   NormalV = normalize(gl_NormalMatrix * gl_Normal);
   vector = vec3(gl_ModelViewMatrix * gl_Vertex);       
   gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}