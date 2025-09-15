// global.d.ts or styles.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}