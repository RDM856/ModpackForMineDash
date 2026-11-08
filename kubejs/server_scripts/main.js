// Visit the wiki for more info - https://kubejs.com/


ServerEvents.recipes(event => {
  event.remove({ output: 'createendertransmission:chunk_loader' })
  event.remove({ output: 'advancedperipherals:player_detector' })
  event.remove({ output: 'advancedperipherals:chunk_controller' })
  event.remove({ output: 'supplementaries:turn_table' })
  event.remove({ output: 'create_sa:create_stuff_additions_tab' })
  event.remove({ output: 'create_sa:andesite_jetpack_chestplate' })
  event.remove({ output: 'create_sa:copper_jetpack_chestplate' })
  event.remove({ output: 'create_sa:netherite_jetpack_chestplate' })
  event.remove({ output: 'create_sa:brass_jetpack_chestplate' })
  event.remove({ output: 'pocket:empty_box' })
  event.remove({ output: 'pocket:display_bottle' })
  event.remove({ output: 'pocket:brass_display_case' })
  event.recipes.create.mixing([Item.of('minecraft:end_stone', 8)], [Fluid.of('supplementaries:lumisene', 250), Item.of('minecraft:cobblestone', 8), 'minecraft:ender_pearl']).superheated()
  event.recipes.create.compacting(['minecraft:cobblestone'], [Fluid.of('minecraft:water', 500), Fluid.of('minecraft:lava', 500)])
  event.shaped(
    Item.of('create_dragons_plus:blaze_upgrade_smithing_template', 1), // arg 1: output
    [
      'BCB',
      'BAB', // arg 2: the shape (array of strings)
      'BBB'
    ],
    {
      A: 'minecraft:netherrack',
      B: 'minecraft:blaze_rod',  //arg 3: the mapping object
      C: 'minecraft:gold_ingot'
    }
  )


})

  
  
  
  
  




