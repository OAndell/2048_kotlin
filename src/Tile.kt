import kotlin.js.Math

class Tile() {

    companion object {
        val ANIMATION_NONE = "ANIMATION_NONE"
        val ANIMATION_POPIN = "ANIMATION_POPIN"
        val ANIMATION_SOUTH = "ANIMATION_SOUTH"
        val ANIMATION_NORTH = "ANIMATION_NORTH"
        val ANIMATION_WEST = "ANIMATION_WEST"
        val ANIMATION_EAST = "ANIMATION_EAST"
    }

    var value:Int?

    var animation:String?

    fun printNumber(){
        println(value)
    }

    fun doubleValue(){
        value = value?.times(2)
    }

    init {
        val is2 = (Math.random() * ((10 + 1) - 1) + 1).toInt()
        value = if (is2 > 1){
            2;
        }
        else{
            4;
        }
        animation = ANIMATION_POPIN
    }


}