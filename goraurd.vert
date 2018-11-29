out vec4 vertex_color;
void main(){
vec3 vertex = vec3(gl_ModelViewMatrix * gl_Vertex);
vec3 NormalV = normalize(gl_NormalMatrix * gl_Normal);

vec3 Enn = normalize(-vertex);    
vec3 Lit = normalize(gl_LightSource[0].position.xyz - vertex);      
vec3 Ref = normalize(-reflect(Lit,NormalV));  
   
vec4 amb = gl_FrontLightProduct[0].ambient;
vec4 diff = gl_FrontLightProduct[0].diffuse * max(dot(NormalV,Lit), 0.0);    
vec4 spec = gl_FrontLightProduct[0].specular * pow(max(dot(Ref,Enn),1.0),0.3*gl_FrontMaterial.shininess);
 

vertex_color = gl_FrontLightModelProduct.sceneColor + amb + diff + spec; 

gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}