#pragma strict
var TheInventory : InvetorySystem;
var TheTextures : PlayerInvetory;
var ArrayGrid = 0 ;
static var InventoryNewItemAdded = -1;

var BlankIcon : Texture ;
var TheNewItem : Texture ;

function Start () {
	TheInventory = GetComponent(InvetorySystem);
	TheTextures = GetComponent(PlayerInvetory);
}

function newItem () 
{
	if ( InvetoryAddItem.InventoryNewItemAdded > -1 )
	{
		TheNewItem = TheTextures.itemTexture[InvetoryAddItem.InventoryNewItemAdded];
		if (ArrayGrid < TheInventory.Grids.length)
		{
			if ( TheInventory.Grids[ArrayGrid].image == BlankIcon)
			{
				TheInventory.Grids[ArrayGrid].image = TheNewItem;
				ArrayGrid = 0;
				InvetoryAddItem.InventoryNewItemAdded = -1 ;
			}
			else if (TheInventory.Grids[ArrayGrid].image != BlankIcon)
			{
				ArrayGrid += 1;
			}
		}
	}
}
