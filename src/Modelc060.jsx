import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/modelc060.glb'); // Updated model path

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.001',
          'Material.002',
          'Material.003',
          'Material.metal',
          'Material.clips',
        ];

        materialNames.forEach(name => {
          if (materials[name]) {
            materials[name].map = texture;
            materials[name].map.needsUpdate = true;
            materials[name].needsUpdate = true;
          }
        });
      });
    }
  }, [textureUrl, materials]);

  return (
    <group ref={group} position={[0, -3, 0]} scale={[2, 2, 2]} dispose={null}>
      <group name="Scene">
      <pointLight intensity={543.514} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)001'].geometry} material={materials['Material.001']} position={[1.482, 3.313, 0.074]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFTTLM_(Top)'].geometry} material={materials['Material.001']} position={[-1.648, 0.115, 0.076]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)'].geometry} material={materials['Material.001']} position={[-1.662, 0.115, 0.071]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <group position={[1.482, 3.303, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150041'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150041_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)228'].geometry} material={materials['Material.clips']} position={[0.172, 3.12, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)229'].geometry} material={materials['Material.clips']} position={[1.178, 3.12, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)230'].geometry} material={materials['Material.clips']} position={[0.674, 3.12, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)231'].geometry} material={materials['Material.clips']} position={[-1.311, 3.12, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)232'].geometry} material={materials['Material.clips']} position={[-0.305, 3.12, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)233'].geometry} material={materials['Material.clips']} position={[-0.809, 3.12, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 3.146, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150042'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150042_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)001'].geometry} material={materials['Material.clips']} position={[0.172, 2.963, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)002'].geometry} material={materials['Material.clips']} position={[1.178, 2.963, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)003'].geometry} material={materials['Material.clips']} position={[0.674, 2.963, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)004'].geometry} material={materials['Material.clips']} position={[-1.311, 2.963, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)005'].geometry} material={materials['Material.clips']} position={[-0.305, 2.963, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)006'].geometry} material={materials['Material.clips']} position={[-0.809, 2.963, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 2.989, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150043'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150043_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)007'].geometry} material={materials['Material.clips']} position={[0.172, 2.806, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)008'].geometry} material={materials['Material.clips']} position={[1.178, 2.806, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)009'].geometry} material={materials['Material.clips']} position={[0.674, 2.806, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)010'].geometry} material={materials['Material.clips']} position={[-1.311, 2.806, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)011'].geometry} material={materials['Material.clips']} position={[-0.305, 2.806, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)012'].geometry} material={materials['Material.clips']} position={[-0.809, 2.806, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 2.832, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150044'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150044_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)013'].geometry} material={materials['Material.clips']} position={[0.172, 2.649, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)014'].geometry} material={materials['Material.clips']} position={[1.178, 2.649, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)015'].geometry} material={materials['Material.clips']} position={[0.674, 2.649, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)016'].geometry} material={materials['Material.clips']} position={[-1.311, 2.649, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)017'].geometry} material={materials['Material.clips']} position={[-0.305, 2.649, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)018'].geometry} material={materials['Material.clips']} position={[-0.809, 2.649, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 2.675, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150045'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150045_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)019'].geometry} material={materials['Material.clips']} position={[0.172, 2.492, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)020'].geometry} material={materials['Material.clips']} position={[1.178, 2.492, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)021'].geometry} material={materials['Material.clips']} position={[0.674, 2.492, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)022'].geometry} material={materials['Material.clips']} position={[-1.311, 2.492, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)023'].geometry} material={materials['Material.clips']} position={[-0.305, 2.492, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)024'].geometry} material={materials['Material.clips']} position={[-0.809, 2.492, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 2.518, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150046'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150046_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)025'].geometry} material={materials['Material.clips']} position={[0.172, 2.335, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)026'].geometry} material={materials['Material.clips']} position={[1.178, 2.335, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)027'].geometry} material={materials['Material.clips']} position={[0.674, 2.335, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)028'].geometry} material={materials['Material.clips']} position={[-1.311, 2.335, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)029'].geometry} material={materials['Material.clips']} position={[-0.305, 2.335, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)030'].geometry} material={materials['Material.clips']} position={[-0.809, 2.335, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 2.361, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150047'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150047_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)031'].geometry} material={materials['Material.clips']} position={[0.172, 2.178, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)032'].geometry} material={materials['Material.clips']} position={[1.178, 2.178, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)033'].geometry} material={materials['Material.clips']} position={[0.674, 2.178, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)034'].geometry} material={materials['Material.clips']} position={[-1.311, 2.178, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)035'].geometry} material={materials['Material.clips']} position={[-0.305, 2.178, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)036'].geometry} material={materials['Material.clips']} position={[-0.809, 2.178, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 2.204, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150048'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150048_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)037'].geometry} material={materials['Material.clips']} position={[0.172, 2.021, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)038'].geometry} material={materials['Material.clips']} position={[1.178, 2.021, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)039'].geometry} material={materials['Material.clips']} position={[0.674, 2.021, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)040'].geometry} material={materials['Material.clips']} position={[-1.311, 2.021, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)041'].geometry} material={materials['Material.clips']} position={[-0.305, 2.021, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)042'].geometry} material={materials['Material.clips']} position={[-0.809, 2.021, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 2.047, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150049'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150049_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)043'].geometry} material={materials['Material.clips']} position={[0.172, 1.864, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)044'].geometry} material={materials['Material.clips']} position={[1.178, 1.864, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)045'].geometry} material={materials['Material.clips']} position={[0.674, 1.864, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)046'].geometry} material={materials['Material.clips']} position={[-1.311, 1.864, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)047'].geometry} material={materials['Material.clips']} position={[-0.305, 1.864, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)048'].geometry} material={materials['Material.clips']} position={[-0.809, 1.864, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 1.89, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150050'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150050_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)049'].geometry} material={materials['Material.clips']} position={[0.172, 1.707, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)050'].geometry} material={materials['Material.clips']} position={[1.178, 1.707, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)051'].geometry} material={materials['Material.clips']} position={[0.674, 1.707, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)052'].geometry} material={materials['Material.clips']} position={[-1.311, 1.707, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)053'].geometry} material={materials['Material.clips']} position={[-0.305, 1.707, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)054'].geometry} material={materials['Material.clips']} position={[-0.809, 1.707, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 1.733, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150051'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150051_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)055'].geometry} material={materials['Material.clips']} position={[0.172, 1.55, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)056'].geometry} material={materials['Material.clips']} position={[1.178, 1.55, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)057'].geometry} material={materials['Material.clips']} position={[0.674, 1.55, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)058'].geometry} material={materials['Material.clips']} position={[-1.311, 1.55, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)059'].geometry} material={materials['Material.clips']} position={[-0.305, 1.55, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)060'].geometry} material={materials['Material.clips']} position={[-0.809, 1.55, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 1.576, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150052'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150052_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)061'].geometry} material={materials['Material.clips']} position={[0.172, 1.393, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)062'].geometry} material={materials['Material.clips']} position={[1.178, 1.393, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)063'].geometry} material={materials['Material.clips']} position={[0.674, 1.393, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)064'].geometry} material={materials['Material.clips']} position={[-1.311, 1.393, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)065'].geometry} material={materials['Material.clips']} position={[-0.305, 1.393, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)066'].geometry} material={materials['Material.clips']} position={[-0.809, 1.393, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 1.419, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150053'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150053_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)067'].geometry} material={materials['Material.clips']} position={[0.172, 1.236, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)068'].geometry} material={materials['Material.clips']} position={[1.178, 1.236, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)069'].geometry} material={materials['Material.clips']} position={[0.674, 1.236, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)070'].geometry} material={materials['Material.clips']} position={[-1.311, 1.236, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)071'].geometry} material={materials['Material.clips']} position={[-0.305, 1.236, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)072'].geometry} material={materials['Material.clips']} position={[-0.809, 1.236, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 1.262, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150054'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150054_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)073'].geometry} material={materials['Material.clips']} position={[0.172, 1.079, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)074'].geometry} material={materials['Material.clips']} position={[1.178, 1.079, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)075'].geometry} material={materials['Material.clips']} position={[0.674, 1.079, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)076'].geometry} material={materials['Material.clips']} position={[-1.311, 1.079, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)077'].geometry} material={materials['Material.clips']} position={[-0.305, 1.079, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)078'].geometry} material={materials['Material.clips']} position={[-0.809, 1.079, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 1.105, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150055'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150055_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)079'].geometry} material={materials['Material.clips']} position={[0.172, 0.922, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)080'].geometry} material={materials['Material.clips']} position={[1.178, 0.922, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)081'].geometry} material={materials['Material.clips']} position={[0.674, 0.922, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)082'].geometry} material={materials['Material.clips']} position={[-1.311, 0.922, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)083'].geometry} material={materials['Material.clips']} position={[-0.305, 0.922, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)084'].geometry} material={materials['Material.clips']} position={[-0.809, 0.922, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 0.948, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150056'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150056_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)085'].geometry} material={materials['Material.clips']} position={[0.172, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)086'].geometry} material={materials['Material.clips']} position={[1.178, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)087'].geometry} material={materials['Material.clips']} position={[0.674, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)088'].geometry} material={materials['Material.clips']} position={[-1.311, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)089'].geometry} material={materials['Material.clips']} position={[-0.305, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)090'].geometry} material={materials['Material.clips']} position={[-0.809, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)091'].geometry} material={materials['Material.clips']} position={[0.172, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)092'].geometry} material={materials['Material.clips']} position={[1.178, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)093'].geometry} material={materials['Material.clips']} position={[0.674, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)094'].geometry} material={materials['Material.clips']} position={[-1.311, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)095'].geometry} material={materials['Material.clips']} position={[-0.305, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)096'].geometry} material={materials['Material.clips']} position={[-0.809, 0.765, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 0.791, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150057'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150057_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)097'].geometry} material={materials['Material.clips']} position={[0.172, 0.608, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)098'].geometry} material={materials['Material.clips']} position={[1.178, 0.608, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)099'].geometry} material={materials['Material.clips']} position={[0.674, 0.608, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)100'].geometry} material={materials['Material.clips']} position={[-1.311, 0.608, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)101'].geometry} material={materials['Material.clips']} position={[-0.305, 0.608, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)102'].geometry} material={materials['Material.clips']} position={[-0.809, 0.608, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 0.634, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150058'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150058_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)103'].geometry} material={materials['Material.clips']} position={[0.172, 0.451, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)104'].geometry} material={materials['Material.clips']} position={[1.178, 0.451, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)105'].geometry} material={materials['Material.clips']} position={[0.674, 0.451, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)106'].geometry} material={materials['Material.clips']} position={[-1.311, 0.451, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)107'].geometry} material={materials['Material.clips']} position={[-0.305, 0.451, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)108'].geometry} material={materials['Material.clips']} position={[-0.809, 0.451, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 0.477, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150059'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150059_1'].geometry} material={materials['Material.metal']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)109'].geometry} material={materials['Material.clips']} position={[0.172, 0.294, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)110'].geometry} material={materials['Material.clips']} position={[1.178, 0.294, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)111'].geometry} material={materials['Material.clips']} position={[0.674, 0.294, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)112'].geometry} material={materials['Material.clips']} position={[-1.311, 0.294, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)113'].geometry} material={materials['Material.clips']} position={[-0.305, 0.294, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)234'].geometry} material={materials['Material.clips']} position={[-0.809, 0.294, 0.07]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.482, 0.32, 0.073]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150060'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150060_1'].geometry} material={materials['Material.metal']} />
      </group>
    </group>
  </group>
  )
}


useGLTF.preload('/modelc060.glb')
