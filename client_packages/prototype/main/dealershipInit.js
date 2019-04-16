const cars = [
    {model: "jester", position: {X: -54.76858139038086, Y: -1093.920654296875, Z: 26.422353744506836}},
    {model: "jester", position: {X: -50.37385177612305, Y: -1090.19677734375, Z: 26.422334671020508}},
    {model: "jester", position: {X: -44.897300720214844, Y: -1093.2701416015625, Z: 26.42233657836914}},
    {model: "jester", position: {X: -40.256832122802734, Y: -1094.448974609375, Z: 26.42233657836914}},
    {model: "jester", position: {X: -36.06293487548828, Y: -1099.19482421875, Z: 26.42233657836914}},
    {model: "jester", position: {X: -38.73085021972656, Y: -1104.0802001953125, Z: 26.42233657836914}},
    {model: "jester", position: {X: -45.08631896972656, Y: -1104.58642578125, Z: 26.422338485717773}},
    {model: "jester", position: {X: -50.09553527832031, Y: -1100.03857421875, Z: 26.422338485717773}},

];

module.exports.dealershipInit = () => {
    return cars.forEach(car => {
        return mp.vehicles.new(mp.game.joaat(car.model), new mp.Vector3(car.position.X, car.position.Y, car.position.Z), {

        })
    })
};
