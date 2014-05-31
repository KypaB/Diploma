#pragma strict

function Start () {

}

function OnTriggerEnter ( col : Collider){
	if (col.gameObject.name == "Wood")
	{	
		PlayerInvetory.itemPlayersAmount[0] +=1 ;
		InvetoryAddItem.InventoryNewItemAdded = 0;
		Destroy(col.gameObject);
	}
	
	if (col.gameObject.name == "Apple")
	{
	//	PlayerInvetory.itemPlayersAmount[1] +=1 ;
	//	InvetoryAddItem.InventoryNewItemAdded = 1;
	    if (PlayerHp.Health != PlayerHp.MaxHealth ){
	    	PlayerHp.Health += 20;
	    	if(PlayerHp.Health > PlayerHp.MaxHealth){
				PlayerHp.Health = PlayerHp.MaxHealth;
			} 
			Destroy(col.gameObject);
		}
	}
	
	if (col.gameObject.name == "Iron")
	{
		PlayerInvetory.itemPlayersAmount[2] +=1 ;
		InvetoryAddItem.InventoryNewItemAdded = 2;
		Destroy(col.gameObject);
	}
	
	if (col.gameObject.name == "Copper")
	{
		PlayerInvetory.itemPlayersAmount[3] +=1 ;
		InvetoryAddItem.InventoryNewItemAdded = 3;
		Destroy(col.gameObject);
	}
}