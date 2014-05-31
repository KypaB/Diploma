#pragma strict
var CandoQuest : boolean = true;
var QuestPending : boolean = false;
var QuestFinished : boolean = false;

var QuestScreen1 : boolean = true;
var QuestScreen2 : boolean = true;

var QuestTrackerObject : GameObject;

var QuestObjectiveInString : String = "-Find The lost Brother In Nirannost";

var Myskin : GUISkin;

var EnterArea : boolean = true;

var NPCClickText : boolean = true;

var NPCName : String = "";

function Start () {

}

function Update () {
   var Qtr = QuestTrackerObject.GetComponent(QuestTracker);
   
   if(QuestFinished == true){
      CandoQuest = false;
      QuestPending = false;
     
      if(Qtr.QuestTr1Str == QuestObjectiveInString ){
      	Qtr.QuestTr1Str = "";
      	Qtr.QuestTr1 = true;
      }
      if(Qtr.QuestTr2Str == QuestObjectiveInString){
      	Qtr.QuestTr2Str = "";
      	Qtr.QuestTr2 = true;
      }      
   }
   
   if(EnterArea == true){
   		QuestScreen1 = true;
   		NPCClickText = true;
   }
   
   if(CandoQuest == false ){
   		NPCClickText = true;
   }
   
   if(QuestPending == true){
   		NPCClickText = true;
   }
   
   if(!EnterArea){
   		if(Input.GetKeyDown("e")){
   			if(CandoQuest == true){
   				QuestScreen1 = !QuestScreen1;
   		}	
   		}
   }
   
   if(QuestPending == true) {
      CandoQuest = false;
   }   
   
   
}

function OnMouseUp() {
   if(CandoQuest == true) {
      QuestScreen1 = !QuestScreen1;
   }
   
   if(QuestPending == true) {
      QuestScreen2 = !QuestScreen2;
   }
}

function OnGUI () {
	GUI.skin = Myskin;

   if(!QuestScreen1) {
      GUI.Box(Rect( 200, 30, 400, 500), "Finding My Son");
      if(GUI.Button(Rect( 240, 445, 100, 30), "Accept")){
         QuestPending = true;
         QuestScreen1 = true;
         ShowInTracker(); 
         Application.LoadLevel("MainMenu");
      }
      
      if(Input.GetKeyDown(KeyCode.Return)){
      	 QuestPending = true;
         QuestScreen1 = true;
         ShowInTracker();
      }
   
      GUI.TextArea(Rect( 250, 130, 280, 200), "I will stop this madnes");
   }
   
   if(!EnterArea){
   		if(QuestScreen1 == true){
   			NPCClickText = false;
   		}
   		
   		if(QuestScreen1 == false){
   			NPCClickText = true;
   		}
   }
   
   
   if(NPCClickText == false){
   		GUI.Label(Rect( 900, 500, 200, 50), "Press E" + "     " + NPCName);
   }
   }
   
function ShowInTracker () {
   var Qtr = QuestTrackerObject.GetComponent(QuestTracker);
   
   
   if(QuestPending == true){
      if(Qtr.QuestTr1 == true){
         Qtr.QuestTr1Str = QuestObjectiveInString;
         Qtr.QuestTr1 = false;
      }
      else {
      if(Qtr.QuestTr2 == true){
         Qtr.QuestTr2Str = QuestObjectiveInString;
         Qtr.QuestTr2 = false;
      }
      }
      }
   }      
   
   function OnTriggerEnter(other: Collider){
   		EnterArea = !EnterArea;
   }
   
   function OnTriggerExit(other: Collider){
   		EnterArea = true;
   }