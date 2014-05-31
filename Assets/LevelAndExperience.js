#pragma strict

static var CurrentLevel : float = 1f;
static var CurrentExp : float = 0f;
var MaxLevel : float;
var MaxExp : float;
var quit = false;


var ToggleExp : boolean = true;

function Update () {
   LevelExp();
   
   if(Input.GetKeyDown("q")){
   		ToggleExp = !ToggleExp;
   }
}

function OnGUI () {
if(!ToggleExp){
GUI.Box(Rect( 270, 10, Screen.width/5, 20), CurrentExp.ToString());

}

GUI.Label(Rect( 50 , 100, 1000, 1000), "Level :");
GUI.Label(Rect( 100, 100, 1000, 1000), CurrentLevel.ToString());
}

function LevelExp(){
   if(CurrentExp > 100){
     CurrentLevel = 2f;
     PlayerHp.MaxHealth = 110;
     MeleDo.TheDamage = 60;
     OneTime();
 }
   
   if(CurrentExp > 300){
      CurrentLevel = 3f;
      PlayerHp.MaxHealth = 120;
      MeleDo.TheDamage = 70;
      OneTime();
   }
   
   if(CurrentExp > 900){
      CurrentLevel = 4f;
      PlayerHp.MaxHealth = 130;
      MeleDo.TheDamage = 80;
      OneTime();
   }
   
   if(CurrentExp > 2700){
      CurrentLevel = 5f;
      PlayerHp.MaxHealth = 140;
      MeleDo.TheDamage = 90;
      OneTime();
   }
   
   if(CurrentExp > 8100){
   PlayerHp.MaxHealth = 150;
      CurrentLevel = 6f;
      OneTime();
      MeleDo.TheDamage = 100;
   }
} 

function OneTime() {
    if(quit) {
       return;
    } 
    quit = true;
    PlayerHp.Health = PlayerHp.MaxHealth;
}