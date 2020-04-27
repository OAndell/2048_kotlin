import kotlin.js.Math

class Tile {
    var value:Int?

    constructor(){
        val is2 = (Math.random() * ((10 + 1) - 1) + 1).toInt()
        if (is2 > 1){
            value = 2;
        }
        else{
            value = 4;
        }
    }

    fun printNumber(){
        println(value)
    }

    fun doubleValue(){
        value = value?.times(2)
    }


}