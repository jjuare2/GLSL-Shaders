varying vec3 NormalV;
varying vec3 vector;    

void main (void)  

{  
   vec3 Enn = normalize(-vector); 
   vec3 Lit = normalize(gl_LightSource[0].position.xyz - vector);         
   vec3 Ref = normalize(-reflect(Lit,NormalV));  
   vec3 Half = normalize(Lit + Enn);	
   float blinn = pow(max(dot(NormalV, Half), 0.5), gl_FrontMaterial.shininess);
  
   vec4 diff = gl_FrontLightProduct[0].diffuse * max(dot(NormalV,Lit), 0.75);    
   vec4 spec = gl_FrontLightProduct[0].specular * blinn;
   vec4 amb = gl_FrontLightProduct[0].ambient;  

   gl_FragColor = gl_FrontLightModelProduct.sceneColor + diff + spec + amb + blinn;   

}
