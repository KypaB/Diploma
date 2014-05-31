#pragma strict

static var itemID : String [] = ["Wood", "Apple" , " Iron" , "Copper"];
static var itemPlayersAmount : int[] = [0 , 0 , 0 , 0];
static var itemBuyingAmount : int[] = [10 , 10 , 30 , 20];
static var itemSellingAmount : int[] = [5 , 5 , 15 , 10];
var itemTexture = new Texture[PlayerInvetory.itemID.length];

function Start () {
	
	var textures : Object [] = Resources.LoadAll("Items_icons",Texture2D);
	for (var i= 0 ; i < textures.length ; i++)
	{
		itemTexture[i] = textures[i];
	}
	
}