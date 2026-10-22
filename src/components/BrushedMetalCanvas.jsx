import { Shader, Text, BrushedMetal } from "shaders/react";

function BrushedMetalCanvas({ partial, fontSize, palette, onReady, onUnavailable }) {
  return (
    <Shader
      disableTelemetry
      style={{ width: "100%", height: "100%" }}
      onReady={onReady}
      onUnavailable={onUnavailable}
    >
      <Text
        id="metalname_mask"
        text={partial || " "}
        fontFamily="Inter"
        fontWeight={700}
        fontSize={fontSize}
        letterSpacing={-0.045}
        lineHeight={0.88}
        textAlign="left"
        width={1}
        color="#ffffff"
        visible={false}
        origin="top-left"
        center={{ x: 0, y: 0 }}
      />
      <BrushedMetal
        maskSource="metalname_mask"
        lightColor={palette.lightColor}
        darkColor={palette.darkColor}
        brushAngle={0}
        anisotropy={0.4}
        grain={0.4}
        grainScale={2}
        roughness={0.5}
        environment={1.4}
        lightAngle={215}
        speed={0.4}
        bevelWidth={0.06}
        bevelShape={1}
        edgeSoftness={0.02}
        shape={{ type: "roundedRectSDF", width: 2, height: 2, rounding: 0 }}
        scale={1.2}
      />
    </Shader>
  );
}

export default BrushedMetalCanvas;