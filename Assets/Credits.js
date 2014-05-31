#pragma strict
var myskin : GUISkin;
var y : float = 500.0;

function Start () {

}

	function Update () {
		if (gameObject.Find("Main Camera").transform.position.x == -100)
		{
			y = y -1;
		}

	}
	function OnGUI () {
	if (gameObject.Find("Main Camera").transform.position.x == -100){
		GUI.skin = myskin;
		GUI.Label(Rect((Screen.width/2)-40,y,200,50),"Directed By:");
		GUI.Label(Rect((Screen.width/2)-40,y+20,200,50),"Blagovest Bozhinov");
		GUI.Label(Rect((Screen.width/2)-40,y+60,200,50),"3D Models By:");
		GUI.Label(Rect((Screen.width/2)-40,y+80,200,50),"Blagovest Bozhinov");
		GUI.Label(Rect((Screen.width/2)-40,y+120,200,50),"Animation By:");
		GUI.Label(Rect((Screen.width/2)-40,y+140,200,50),"Blagovest Bozhinov");
		if (GUI.Button(Rect(1, 1, 80, 30), "<-- Back"))
			{
				gameObject.Find("Main Camera").transform.position.x = 0;
				y = 500;
			}
	}
}