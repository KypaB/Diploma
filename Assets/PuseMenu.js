#pragma strict


var paused : boolean = false;
var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
var respawnTransform : Transform;
var Key : KeyCode;
static var On2 = 0;
 
 function Start () {
	lookAround01 = gameObject.GetComponent(MouseLook);
	lookAround02 = GameObject.Find("MainCamera").GetComponent(MouseLook);
}
 
function Update () {
 if (PuseGame.On == 0){
 
    if(Input.GetKeyDown(Key) && paused == false)
   {
   paused = true;
   On2 = 1;
   lookAround01.enabled = false;
   lookAround02.enabled = false;
   
   Time.timeScale = 0;
   }
   else if(Input.GetKeyDown(Key) && paused == true) { 
   paused = false;
   On2 = 0;
   lookAround01.enabled = true;
   lookAround02.enabled = true;
   Time.timeScale = 1;
   }
   }
}

function OnGUI ()
{
	if (paused == true) {
	if (GUI.Button(Rect(Screen.width*0.5-50, 240, 100, 40), "Respawn"))
		{
			RespawnPlayer();
			 lookAround01.enabled = true;
  			 lookAround02.enabled = true;
   			 Time.timeScale = 1;
   			 paused = false;
		}
			if (GUI.Button(Rect(Screen.width*0.5-50, 240-40, 100, 40), "Menu"))
		{
			Application.LoadLevel("MainMenu");
			 lookAround01.enabled = true;
  			 lookAround02.enabled = true;
   			 Time.timeScale = 1;
   			 LevelAndExperience.CurrentExp = 0.0 ;
   			 LevelAndExperience.CurrentLevel = 0 ;  
   			 PlayerHp.MaxHealth = 100 ;			 
		}
	}
}

function RespawnPlayer()
{
	transform.position = respawnTransform.position;
	transform.rotation = respawnTransform.rotation;
}