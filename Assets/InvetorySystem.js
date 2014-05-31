#pragma strict

private var InvetoryOn = false;
private var GridValue : float = -1;
var myskin : GUISkin;

var GridPosition : Vector2 = new Vector2 (13,47);
var GridSize : Vector2 = new Vector2(230,43);
var NamePosition : Vector2 = new Vector2 (13,10);
var NameSize : Vector2 = new Vector2(230,180);
var ClosePosition : Vector2 = new Vector2 (218,5);
var CloseSize : Vector2 = new Vector2(35,35);
var WindowPosition : Vector2 = new Vector2(279,321);
var WindowSize : Vector2 = new Vector2(360,360);

var InvetoryWindow : Texture;
var CloseIcon : Texture ;
var Grids : GUIContent[];

function Update () 
{
	var AddingNewItem : InvetoryAddItem = GetComponent(InvetoryAddItem);
 if (PuseGame.On == 0 && PuseMenu.On2 == 0){
	if(Input.GetKeyUp("i"))
	{
		if(InvetoryOn == false)
		{
			InvetoryOn = true;
		}
		else if (InvetoryOn == true)
		{
			InvetoryOn = false;
		}
	}
	AddingNewItem.newItem();
}
}
function OnGUI ()
{
	GUI.skin = myskin;
	if (InvetoryOn == true)
	{
	GUI.BeginGroup (new Rect(WindowPosition.x,WindowPosition.y,WindowSize.x,WindowSize.y), InvetoryWindow);
			GUI.Label(Rect(NamePosition.x,NamePosition.y,NameSize.x,NameSize.y),"Your Inventory");	
			if(GUI.Button(Rect(ClosePosition.x,ClosePosition.y,CloseSize.x,CloseSize.y), CloseIcon))
			{
				InvetoryOn = false;
			}
		GridValue = GUI.SelectionGrid(Rect(GridPosition.x,GridPosition.y,GridSize.x,GridSize.y),GridValue,Grids , 5);
		GUI.EndGroup();
	}
}