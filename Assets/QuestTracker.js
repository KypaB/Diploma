var myskin : GUIStyle;

var QuestTr1 : boolean = true;
var QuestTr2 : boolean = true;


var QuestTr1Str : String = "";
var QuestTr2Str : String = "";


function OnGUI () {
GUI.skin.label = myskin;

GUI.Label(Rect( 1550, 250, 1000, 1000), QuestTr1Str.ToString());
GUI.Label(Rect( 1550, 300, 1000, 1000), QuestTr2Str.ToString());


}
function Update() {
	if(QuestTr1 == true) {
		QuestTr1Str = "";
	}
	if(QuestTr2 == true) {
		QuestTr2Str = "";
	}
}


