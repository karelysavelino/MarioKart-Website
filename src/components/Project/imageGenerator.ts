const bikes : {[key : string ] : NodeRequire}  = {
    'standard_bike': require('../../images/sprites/bikes/standard_bike.png'),
    'mr_scooty': require('../../images/sprites/bikes/mr_scooty.png'),
    'master_cycle_zero': require('../../images/sprites/bikes/master_cycle_zero.png'),
    'flame_rider': require('../../images/sprites/bikes/flame_rider.png'),
    'jet_bike': require('../../images/sprites/bikes/jet_bike.png'),
    'comet': require('../../images/sprites/bikes/comet.png'),
    'the_duke': require('../../images/sprites/bikes/the_duke.png'),
    'yoshi_bike': require('../../images/sprites/bikes/yoshi_bike.png'),
    'varmint': require('../../images/sprites/bikes/varmint.png'),
    'master_cycle': require('../../images/sprites/bikes/master_cycle.png'),
    'city_tripper': require('../../images/sprites/bikes/city_tripper.png'),
    'sport_bike': require('../../images/sprites/bikes/sport_bike.png'),
};

const  characters : {[key : string ] : NodeRequire}  = {
    "baby_daisy": require('../../images/sprites/characters/baby_daisy.png'),
    "baby_luigi": require('../../images/sprites/characters/baby_luigi.png'),
    "baby_mario": require('../../images/sprites/characters/baby_mario.png'),
    "baby_peach": require('../../images/sprites/characters/baby_peach.png'),
    "baby_rosalina": require('../../images/sprites/characters/baby_rosalina.png'),
    "bowser_jr": require('../../images/sprites/characters/bowser_jr.png'),
    "bowser": require('../../images/sprites/characters/bowser.png'),
    "cat_peach": require('../../images/sprites/characters/cat_peach.png'),
    "daisy": require('../../images/sprites/characters/daisy.png'),
    "donkey_kong": require('../../images/sprites/characters/donkey_kong.png'),
    "dry_bones": require('../../images/sprites/characters/dry_bones.png'),
    "dry_bowser": require('../../images/sprites/characters/dry_bowser.png'),
    "iggy": require('../../images/sprites/characters/iggy.png'),
    "inkling_boy": require('../../images/sprites/characters/inkling_boy.png'),
    "inkling": require('../../images/sprites/characters/inkling.png'),
    "isabelle": require('../../images/sprites/characters/isabelle.png'),
    "king_boo": require('../../images/sprites/characters/king_boo.png'),
    "koopa_troopa": require('../../images/sprites/characters/koopa_troopa.png'),
    "lakitu": require('../../images/sprites/characters/lakitu.png'),
    "larry": require('../../images/sprites/characters/larry.png'),
    "lemmy": require('../../images/sprites/characters/lemmy.png'),
    "link": require('../../images/sprites/characters/link.png'),
    "ludwig": require('../../images/sprites/characters/ludwig.png'),
    "luigi": require('../../images/sprites/characters/luigi.png'),
    "mario": require('../../images/sprites/characters/mario.png'),
    "metal_mario": require('../../images/sprites/characters/metal_mario.png'),
    "morton": require('../../images/sprites/characters/morton.png'),
    "peach": require('../../images/sprites/characters/peach.png'),
    "pink_gold_peach": require('../../images/sprites/characters/pink_gold_peach.png'),
    "rosalina": require('../../images/sprites/characters/rosalina.png'),
    "roy": require('../../images/sprites/characters/roy.png'),
    "shy_guy": require('../../images/sprites/characters/shy_guy.png'),
    "tanooki_mario": require('../../images/sprites/characters/tanooki_mario.png'),
    "toad": require('../../images/sprites/characters/toad.png'),
    "toadette": require('../../images/sprites/characters/toadette.png'),
    "villager_boy": require('../../images/sprites/characters/villager_boy.png'),
    "villager_girl": require('../../images/sprites/characters/villager_girl.png'),
    "waluigi": require('../../images/sprites/characters/waluigi.png'),
    "wario": require('../../images/sprites/characters/wario.png'),
    "wendy": require('../../images/sprites/characters/wendy.png'),
    "yoshi": require('../../images/sprites/characters/yoshi.png'),
};
const tires : {[key : string ] : NodeRequire}  = {
    'retro_off_road': require('../../images/sprites/tires/retro_off_road.png'),
    'metal': require('../../images/sprites/tires/metal.png'),
    'standard': require('../../images/sprites/tires/standard.png'),
    'azure_roller': require('../../images/sprites/tires/azure_roller.png'),
    'gold_tires': require('../../images/sprites/tires/gold_tires.png'),
    'sponge': require('../../images/sprites/tires/sponge.png'),
    'roller': require('../../images/sprites/tires/roller.png'),
    'slick': require('../../images/sprites/tires/slick.png'),
    'blue_standard': require('../../images/sprites/tires/blue_standard.png'),
    'wood': require('../../images/sprites/tires/wood.png'),
    'hot_monster': require('../../images/sprites/tires/hot_monster.png'),
    'triforce_tires': require('../../images/sprites/tires/triforce_tires.png'),
    'crimson_slim': require('../../images/sprites/tires/crimson_slim.png'),
    'off_road': require('../../images/sprites/tires/off_road.png'),
    'gla_tires': require('../../images/sprites/tires/gla_tires.png'),
    'cyber_slick': require('../../images/sprites/tires/cyber_slick.png'),
    'slim': require('../../images/sprites/tires/slim.png'),
    'ancient_tires': require('../../images/sprites/tires/ancient_tires.png'),
    'monster': require('../../images/sprites/tires/monster.png'),
    'leaf_tires': require('../../images/sprites/tires/leaf_tires.png'),
    'button': require('../../images/sprites/tires/button.png'),
    'cushion': require('../../images/sprites/tires/cushion.png'),
};

const gliders : {[key : string ] : NodeRequire}  = {
    /*
    'bowser_kite' : require('../images/sprites/gliders/bowser_kite.png'),
    'cloud_glider' : require('../images/sprites/gliders/cloud_glider.png'),
    'flower_glider' : require('../images/sprites/gliders/flower_glider.png'),
    'gold_glider' : require('../images/sprites/gliders/gold_glider.png'),
    'hylian_glider' : require('../images/sprites/gliders/hylian_glider.png'),
    'mktv_parafoil' : require('../images/sprites/gliders/mktv_parafoil.png'),
    'paper_glider' : require('../images/sprites/gliders/paper_glider.png'),
    'parachute' : require('../images/sprites/gliders/parachute.png'),
    'parafoil' : require('../images/sprites/gliders/parafoil.png'),
    'paraglider' : require('../images/sprites/gliders/paraglider.png'),
    'peach_parasol' : require('../images/sprites/gliders/peach_parasol.png'),
    'plane_glider' : require('../images/sprites/gliders/plane_glider.png'),
    'super_glider' : require('../images/sprites/gliders/super_glider.png'),
    'waddle_wing' : require('../images/sprites/gliders/waddle_wing.png'),
    'wario_wing' : require('../images/sprites/gliders/wario_wing.png'),
    */
}

    const gliderNames : string[] = [

    ]







const characterNames : string[] = [
    "baby_daisy",
    "baby_luigi",
    "baby_mario",
    "baby_peach",
    "baby_rosalina",
    "bowser_jr",
    "bowser",
    "cat_peach",
    "daisy",
    "donkey_kong",
    "dry_bones",
    "dry_bowser",
    "iggy",
    "inkling_boy",
    "inkling",
    "isabelle",
    "king_boo",
    "koopa_troopa",
    "lakitu",
    "larry",
    "lemmy",
    "link",
    "ludwig",
    "luigi",
    "mario",
    "metal_mario",
    "morton",
    "peach",
    "pink_gold_peach",
    "rosalina",
    "roy",
    "shy_guy",
    "tanooki_mario",
    "toad",
    "toadette",
    "villager_boy",
    "villager_girl",
    "waluigi",
    "wario",
    "wendy",
    "yoshi",
];
const bikeNames : string[]= [
    "standard_bike",
    "mr_scooty",
    "master_cycle_zero",
    "flame_rider",
    "jet_bike",
    "comet",
    "the_duke",
    "yoshi_bike",
    "varmint",
    "master_cycle",
    "city_tripper",
    "sport_bike",
];

const tireNames : string[] = [
    'retro_off_road',
    'metal',
    'standard',
    'azure_roller',
    'gold_tires',
    'sponge',
    'roller',
    'slick',
    'blue_standard',
    'wood',
    'hot_monster',
    'triforce_tires',
    'crimson_slim',
    'off_road',
    'gla_tires',
    'cyber_slick',
    'slim',
    'ancient_tires',
    'monster',
    'leaf_tires',
    'button',
    'cushion',
];
    
    
export default class ImageGenerator {
    public bikeNames : string[]= bikeNames;
    public characterNames : string[]= characterNames;
    public tireNames : string []= tireNames;

    public characters : {[key : string ] : NodeRequire} = characters;
    public bikes : {[key : string ] : NodeRequire} = bikes;
    public tires : {[key : string]: NodeRequire} = tires;
}