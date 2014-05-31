#pragma strict

var paused : boolean = false;
var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
static var On = 0;
 
 function Start () {
	lookAround01 = gameObject.GetComponent(MouseLook);
	lookAround02 = GameObject.Find("MainCamera").GetComponent(MouseLook);
}
 
function Update () {
 
 if (PuseMenu.On2 == 0){
    if(Input.GetKeyDown("p") && paused == false)
   {
   paused = true;
   On = 1;
   lookAround01.enabled = false;
   lookAround02.enabled = false;
   
   Time.timeScale = 0;
   }
   else if(Input.GetKeyDown("p") && paused == true) {
   
   
   paused = false;
   On = 0;
   lookAround01.enabled = true;
   lookAround02.enabled = true;
   
   Time.timeScale = 1;
   
   }
  }
}
function OnGUI ()
{
	if (paused == true)
	{
		GUI.TextArea(Rect(Screen.width*0.5-50, 240, 130, 25), "The game is pused");		
	}
}