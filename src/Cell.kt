
class Cell(x :Int, y: Int){
    var tile: Tile? = null;

    fun getPrintable(): String? {
        if (tile != null){
            return " " + tile!!.value.toString() + " ";
        }
        return "  "
    }

    fun getColor(): String{
        if(tile == null){
            return "#faf8f0"
        }
        when (tile!!.value) {
            2 -> return "#fff4d1"
            4 -> return "#fae48c"
            8 -> return "#c9fa37"
            16 -> return "#316b19"
            32 -> return "#062b3d"
            64 -> return "#001a9e"
            128 -> return "#8e009e"
            256 -> return "#e6056e"
            else -> {
                return "#ff0303"
            }
        }
    }
}