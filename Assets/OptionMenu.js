﻿#pragma strict
static var currentDifficlity = "Human!";
var TextStyle = new GUIStyle();



function OnGUI ()
{
	if (gameObject.Find("Main Camera").transform.position.x == 100)
		{
			//Name
			GUI.color = Color.white;
			 GUI.Box (Rect (10,10,200,1000), "Graphics Resolution");
	 
		    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
		    if (GUI.Button (Rect (20,40,80,20), "Fastest")) {
		       QualitySettings.currentLevel = QualityLevel.Fastest;
		    }
		 
		    // Make the second button.
		    if (GUI.Button (Rect (20,70,80,20), "Fast")) {
		       QualitySettings.currentLevel = QualityLevel.Fast;
		    }
		 
		    // Make the second button.
		    if (GUI.Button (Rect (20,100,80,20), "Simple")) {
		       QualitySettings.currentLevel = QualityLevel.Simple;
		    }
		 
		    // Make the second button.
		    if (GUI.Button (Rect (20,130,80,20), "Good")) {
		       QualitySettings.currentLevel = QualityLevel.Good;
		    }
		 
		    // Make the second button.
		    if (GUI.Button (Rect (20,160,80,20), "Beautiful")) {
		       QualitySettings.currentLevel = QualityLevel.Beautiful;
		    }
		 
		    // Make the second button.
		    if (GUI.Button (Rect (20,190,80,20), "Fantastic")) {
		       QualitySettings.currentLevel = QualityLevel.Fantastic;
		    }
			if (GUI.Button(Rect(100, 190, 80, 30), "<-- Back"))
			{
				gameObject.Find("Main Camera").transform.position.x = 0;
			}
	}
}