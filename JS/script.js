const randomItem = ['Een opblaasbare kroon', 'een mini-waterkoker', 'een emoji kussen', 'een opvouwbare stoel',
    'een zonnebril in de vorm van een hart', 'een handventilator', 'een mini-ezeltje', 'een opblaasbare flamingo',
    'een opvouwbare frisbee', 'een elektrische tandenborstel in de vorm van een robot', 'een holografische clutch',
    'een mini-voetbal', 'een opblaasbaar luchtbed in de vorm van een ananas', 'een lippenbalsem in de vorm van een donut',
    'een mini-sneeuwbol', 'een opblaasbare pizzapunt', 'een mini-strijkijzer', 'een grappige sleutelhanger', 'een mini-fluitje',
    'een opblaasbare krokodil', 'een mini-spellen set', 'een paraplu in de vorm van een bloem', 'een opblaasbare eenhoorn',
    'een mini-cactus', 'een opvouwbare lunchbox', 'een emoji t-shirt', 'een mini-spelcomputer', 'een opblaasbare zwaan',
    'een mini-draaitafel', 'een opvouwbare fietsbel', 'een opblaasbare palmboom', 'een mini-badmintonset', 'een opblaasbare papegaai',
    'een mini-zeemeermin', 'een opvouwbare rugzak', 'een emoji koptelefoon', 'een mini-bokszak', 'een opblaasbare donut',
    'een mini-videocamera', 'een opblaasbare walvis', 'een mini-kluisje', 'een opvouwbare frisbee in de vorm van een UFO',
    'een opblaasbare hond', 'een mini-schildersezel', 'een opblaasbare champagnefles', 'een mini-draagbare luidspreker',
    'een opblaasbare zeehond', 'een mini-hamer', 'een opvouwbare kam', 'een opblaasbare kreeft', 'een mini-plantschaar',
    'een opblaasbare octopus', 'een mini-afwasborstel', 'een opblaasbare tijger', 'een mini-kampeerset', 'een opblaasbare cactus',
    'een mini-fitness set', 'een opblaasbare giraffe', 'een mini-koelkast', 'een opvouwbare toilettas', 'een opblaasbare zalm',
    'een mini-spiegelbal', 'een opblaasbare olifant', 'een mini-snoepautomaat', 'een opblaasbare koe', 'een mini-sleutelvinder',
    'een opblaasbare krab', 'een mini-bureaulamp', 'een opblaasbare slang', 'Draadloze oortjes',
    'Waterdichte telefoonhoes', 'Verstelbare weerstandsbanden',
    'Zachte slaapmasker', 'Compacte reiswekker', 'Opvouwbare fiets', 'Draagbare blender', 'Multifunctionele telefoonhouder',
    'Opvouwbare picknicktafel', 'Waterfles met infuser', 'Handige bagage organizer', 'Draagbare luchtzuiveraar',
    'Verstelbare laptopstandaard', 'Flexibele telefoonstatief', 'Opvouwbare hondenbench', 'Mini-projector',
    'Roterende krultang', 'Opvouwbare loopband', 'Draagbare hangmat', 'Lichtgewicht koffer', 'Multifunctionele autolader',
    'Slimme weegschaal', 'Oplaadbare zaklamp', 'Draagbare kledingstomer', 'Bewegingssensor nachtlampje', 'Opvouwbare barbecue',
    'Elektrische schroevendraaier', 'Handige wijnopener', 'Draagbare espressomachine', 'Verstelbare tafelventilator', 'Slimme thermostaat',
    'Elektrische deken', 'Programmeerbare koffiemachine', '3D-printer', 'Elektrische tandenborstel', 'Robotstofzuiger', 'Slimme verlichting',
    'Slimme deurbel', 'Zelfopblazend luchtbed', 'Rugmassagekussen', 'Professionele haardroger', 'Smartwatch', 'Solar powerbank', 
    'Smart home hub', 'Kruimeldief', 'Multiroom audio systeem', 'Slimme plantenpot', 'Yoga mat', 'Handheld game console',
    'Elektrische step', 'Waterdichte actiecamera', 'GPS horloge', 'Elektrische grasmaaier', 'Slim slot', 'Slimme kattenbak',
    'Fietsnavigatiesysteem', 'Fitness tracker', 'Bewegingssensor buitenverlichting', 'Slimme gezichtsreiniger', 'Elektrische drukkoker',
    'Slimme luchtreiniger', 'Slimme oven', 'Slimme friteuse', 'Slimme koelkast', 'Slimme waterkoker', 'Slimme tandenborstelhouder',
    'Slimme vuilnisbak', 'Slimme raamdecoratie', 'Slimme kraan', 'Slimme spiegel', 'Cthulhu-pop', 'Draken-ei', 'Eenhoornhoorn',
    'Bigfoot-sloffen', 'Yeti-muts', 'Zeemeermin-staart', 'Vampier-tanden', 'Zombie-lichaam', 'Sfinx-kat', 'Harpij-klauwen'
     
     
     

];




function chanceImage() {
    let chance = Math.floor(Math.random() * 10) + 1;
    if (chance == 1) {
        document.getElementById('changeImage').src = 'IMG/sailboat-chance.png';
        document.getElementById("changeWaves1").src = "IMG/waves-chance.png";
        document.getElementById("changeWaves2").src = "IMG/waves-chance.png";
        document.getElementById("changeWaves1").width = "20vh";
    }
}




function randomitemcalc() {
    let index = Math.floor(Math.random() * randomItem.length);
    let item = randomItem[index];

    document.getElementById('random-item').innerHTML = item;
}

window.addEventListener('load', chanceImage);

window.addEventListener('load', randomitemcalc)

console.log(randomItem.length);