
StartupEvents.registry('item', event => {
    // Явно указываем пространство имен 'kubejs'
    event.create('kubejs:incomplete_ender_pearl', 'create:sequenced_assembly')
        .displayName('Незаконченный эндер жемчуг').texture('minecraft:item/ender_pearl')
})