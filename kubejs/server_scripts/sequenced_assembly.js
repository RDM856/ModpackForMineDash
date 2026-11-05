// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


ServerEvents.recipes(event => {
  const transitional = 'kubejs:incomplete_ender_pearl'
  event.recipes.createSequencedAssembly([
      CreateItem.of('minecraft:ender_pearl', 0.90), 
       CreateItem.of('minecraft:chorus_fruit', 0.16)
  ], 
  'minecraft:amethyst_shard', 
  [
      event.recipes.createFilling(
          transitional, 
          [transitional, Fluid.of('supplementaries:lumisene', 250)]
      ),
      event.recipes.create.pressing(transitional, [transitional])
  ])
  .transitionalItem(transitional)
  .loops(1)
})

  
  
  
  
  




