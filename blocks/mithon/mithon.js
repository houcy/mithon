'use strict';

goog.provide('Blockly.Blocks.sensor');

goog.require('Blockly.Blocks');

Blockly.Blocks.sensor.HUE = 40;

Blockly.FieldColour.COLOURS = ['#0f0', '#0e0', '#0d0', '#0c0', '#0b0', '#0a0',
    '#080', '#060', '#040', '#000'];
Blockly.FieldColour.COLUMNS = 5;

Blockly.Blocks.base_loop = {
    init : function () {
      this.jsonInit({
        "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT + Blockly.Msg.CONTROLS_REPEAT_INPUT_DO,
        "message1": "%1",
        "colour": Blockly.Blocks.loops.HUE,
        "args1": [
            {
              "type": "input_statement",
              "name": "DO"
            }
          ],
        //"style":{"hat": "not"}, 
        "tooltip": "",
        "helpUrl": ""
      });
      //this.setPreviousStatement(true, null);
    }
  };

Blockly.Blocks.actuator_rgb_color = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
            .appendField(Blockly.MIXLY_RGB_NUM);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_ALL,"0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"]
        ]),'LED')
            .appendField(Blockly.blynk_iot_WidgetLED_COLOR);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.COLOUR_RGB_RED, "255,0,0"],
                [Blockly.Msg.COLOUR_RGB_ORANGE, "255,128,0"],
                [Blockly.Msg.COLOUR_RGB_YELLOW, "255,255,0"],
                [Blockly.Msg.COLOUR_RGB_GREEN, "0,255,0"],
                [Blockly.Msg.COLOUR_RGB_CYAN, "0,255,255"],
                [Blockly.Msg.COLOUR_RGB_BLUE, "0,0,255"],
                [Blockly.Msg.COLOUR_RGB_PURPLE, "128,0,255"],
                [Blockly.Msg.COLOUR_RGB_WHITE, "255,255,255"]
            ]),'COLOR');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.actuator_rgb_off = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
            .appendField(Blockly.MIXLY_RGB_NUM);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_ALL,"0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"]
        ]),'LED')
            .appendField(Blockly.MIXLY_MICROBIT_Turn_off_display);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.actuator_rgb = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
        this.appendValueInput("_LED_")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_NUM);
        this.appendValueInput("RVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_R);
        this.appendValueInput("GVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_G);
        this.appendValueInput("BVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_B);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.actuator_motor_on = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_MOTOR)
            .appendField(Blockly.LCD_NUMBERING);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_ALL,"0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"]
        ]),'NUMBER');
        this.appendValueInput('SPEED')
            .appendField(Blockly.MIXLY_SPEED+"(0~12)")
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_MICROBIT_Direction)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.CLOCKWISE, "1"],
                [Blockly.Msg.ANTI_CLOCKWISE, "0"]
            ]),'DIRECTION')            
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.actuator_motor_off = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_MOTOR)
            .appendField(Blockly.LCD_NUMBERING);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_ALL,"0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"]
        ]),'NUMBER')
            .appendField(Blockly.MIXLY_STOP)        ;         
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['sensor_pin_near'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
        .appendField(Blockly.LCD_NUMBERING)
        .appendField(new Blockly.FieldDropdown([
            ["1", "1"],
            ["2", "2"]
            ]),'NUMBER')
        .appendField(Blockly.MIXLY_ESP32_NEAR);
        this.setOutput(true,Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_while_btn_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('btn')
            .appendField(Blockly.MIXLY_MICROBIT_JS_CURRENT+Blockly.MIXLY_BUTTON_PRESSED+Blockly.MIXLY_BUTTON)
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_while_is_gesture'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_MICROBIT_JS_IS_GESTURE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_shake, "shake"], [Blockly.MIXLY_UP, "up"], [Blockly.MIXLY_DOWN, "down"], [Blockly.MIXLY_LEFT, "left"], [Blockly.MIXLY_RIGHT, "right"], [Blockly.MIXLY_MICROBIT_face_up, "face up"], [Blockly.MIXLY_MICROBIT_face_down, "face down"], [Blockly.MIXLY_MICROBIT_freefall, "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]), "gesture");
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(true);
    }
};

/*Blockly.Blocks['sensor_button_is_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('btn')
        .appendField(Blockly.MIXLY_BUTTON)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_IS_PRESSED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_IS_PRESSED);
    }
};

Blockly.Blocks['sensor_button_was_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('btn')
        .appendField(Blockly.MIXLY_BUTTON)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_WAS_PRESSED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_WAS_PRESSED);
    }
};

Blockly.Blocks['sensor_button_get_presses'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('btn')
        .appendField(Blockly.MIXLY_BUTTON)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_GET_PRESSES);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN+Blockly.MIXLY_BUTTON+Blockly.MIXLY_GET_PRESSES);
    }
};

Blockly.Blocks.sensor_current_gesture1 = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_MICROBIT_Current_gesture)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_shake, "shake"], [Blockly.MIXLY_UP, "up"], [Blockly.MIXLY_DOWN, "down"], [Blockly.MIXLY_LEFT, "left"], [Blockly.MIXLY_RIGHT, "right"], [Blockly.MIXLY_MICROBIT_face_up, "face up"], [Blockly.MIXLY_MICROBIT_face_down, "face down"], [Blockly.MIXLY_MICROBIT_freefall, "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]), "gesture");
        this.setOutput(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('gesture');
            var mode0 = Blockly.MIXLY_MICROBIT_JS_CURRENT;
            var mode1 = MSG.catSensor;
            var mode2 = Blockly.MIXLY_MICROBIT_JS_STATE;
            var mode3 = Blockly.MIXLY_MICROBIT_PERFORMANCE
            var TOOLTIPS = {
                'shake': Blockly.MIXLY_MICROBIT_shake,
                'up': Blockly.MIXLY_UP,
                'down':Blockly.MIXLY_DOWN,
                'left':Blockly.MIXLY_LEFT,
                'right':Blockly.MIXLY_RIGHT,
                'face up': Blockly.MIXLY_MICROBIT_face_up,
                'face down': Blockly.MIXLY_MICROBIT_face_down,
                'freefall':Blockly.MIXLY_MICROBIT_freefall,
                '3g': '3g',
                '6g': '6g',
                '8g': '8g'
            };
            return mode0 +mode1+mode2+ TOOLTIPS[mode]+mode3;
        });
    }
};

Blockly.Blocks.sensor_current_gesture2 = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_MICROBIT_JS_WAS_GESTURE)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_shake, "shake"], [Blockly.MIXLY_UP, "up"], [Blockly.MIXLY_DOWN, "down"], [Blockly.MIXLY_LEFT, "left"], [Blockly.MIXLY_RIGHT, "right"], [Blockly.MIXLY_MICROBIT_face_up, "face up"], [Blockly.MIXLY_MICROBIT_face_down, "face down"], [Blockly.MIXLY_MICROBIT_freefall, "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]), "gesture");
        this.setOutput(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('gesture');
            var mode0 = Blockly.MIXLY_MICROBIT_JS_CURRENT;
            var mode1 = MSG.catSensor;
            var mode2 = Blockly.MIXLY_MICROBIT_JS_STATE;
            var mode3 = Blockly.MIXLY_MICROBIT_PERFORMANCE
            var TOOLTIPS = {
                'shake': Blockly.MIXLY_MICROBIT_shake,
                'up': Blockly.MIXLY_UP,
                'down':Blockly.MIXLY_DOWN,
                'left':Blockly.MIXLY_LEFT,
                'right':Blockly.MIXLY_RIGHT,
                'face up': Blockly.MIXLY_MICROBIT_face_up,
                'face down': Blockly.MIXLY_MICROBIT_face_down,
                'freefall':Blockly.MIXLY_MICROBIT_freefall,
                '3g': '3g',
                '6g': '6g',
                '8g': '8g'
            };
            return mode0 +mode1+mode2+ TOOLTIPS[mode]+mode3;
        });
    }
};

Blockly.Blocks.controls_attachGestureInterrupt = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_MICROBIT_JS_CURRENT_GESTURE)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_shake, "shake"], [Blockly.MIXLY_UP, "up"], [Blockly.MIXLY_DOWN, "down"], [Blockly.MIXLY_LEFT, "left"], [Blockly.MIXLY_RIGHT, "right"], [Blockly.MIXLY_MICROBIT_face_up, "face up"], [Blockly.MIXLY_MICROBIT_face_down, "face down"], [Blockly.MIXLY_MICROBIT_freefall, "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]), "gesture");
        this.appendStatementInput('DO')
        .appendField(Blockly.MIXLY_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('gesture');
            var mode0 = Blockly.MIXLY_MICROBIT_JS_CURRENT;
            var mode1 = MSG.catSensor;
            var mode2 = Blockly.MIXLY_MICROBIT_JS_STATE;
            var mode3 = Blockly.MIXLY_MICROBIT_PERFORMANCE
            var TOOLTIPS = {
                'shake': Blockly.MIXLY_MICROBIT_shake,
                'up': Blockly.MIXLY_UP,
                'down':Blockly.MIXLY_DOWN,
                'left':Blockly.MIXLY_LEFT,
                'right':Blockly.MIXLY_RIGHT,
                'face up': Blockly.MIXLY_MICROBIT_face_up,
                'face down': Blockly.MIXLY_MICROBIT_face_down,
                'freefall':Blockly.MIXLY_MICROBIT_freefall,
                '3g': '3g',
                '6g': '6g',
                '8g': '8g'
            };
            return mode0 +mode1+mode2+ TOOLTIPS[mode]+mode3;
        });
    }
};

Blockly.Blocks.controls_GestureLists = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_shake, "shake"], [Blockly.MIXLY_UP, "up"], [Blockly.MIXLY_DOWN, "down"], [Blockly.MIXLY_LEFT, "left"], [Blockly.MIXLY_RIGHT, "right"], [Blockly.MIXLY_MICROBIT_face_up, "face up"], [Blockly.MIXLY_MICROBIT_face_down, "face down"], [Blockly.MIXLY_MICROBIT_freefall, "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]), "gesture");
        this.setInputsInline(true);
        this.setOutput(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('gesture');
            var TOOLTIPS = {
                'shake': Blockly.MIXLY_MICROBIT_shake,
                'up': Blockly.MIXLY_UP,
                'down':Blockly.MIXLY_DOWN,
                'left':Blockly.MIXLY_LEFT,
                'right':Blockly.MIXLY_RIGHT,
                'face up': Blockly.MIXLY_MICROBIT_face_up,
                'face down': Blockly.MIXLY_MICROBIT_face_down,
                'freefall':Blockly.MIXLY_MICROBIT_freefall,
                '3g': '3g',
                '6g': '6g',
                '8g': '8g'
            };
            return TOOLTIPS[mode];
        });
    }
};

Blockly.Blocks.controls_attachGestureInterrupt2 = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_MICROBIT_JS_WAS_GESTURE)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_shake, "shake"], [Blockly.MIXLY_UP, "up"], [Blockly.MIXLY_DOWN, "down"], [Blockly.MIXLY_LEFT, "left"], [Blockly.MIXLY_RIGHT, "right"], [Blockly.MIXLY_MICROBIT_face_up, "face up"], [Blockly.MIXLY_MICROBIT_face_down, "face down"], [Blockly.MIXLY_MICROBIT_freefall, "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]), "gesture");
        this.appendStatementInput('DO')
        .appendField(Blockly.MIXLY_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('gesture');
            var mode0 = Blockly.Msg.CONTROLS_IF_MSG_IF;
            var mode1 = MSG.catSensor;
            var mode2 = Blockly.MIXLY_MICROBIT_JS_WAS_GESTURE;
            var mode3 = Blockly.MIXLY_MICROBIT_PERFORMANCE;
            var TOOLTIPS = {
                'shake': Blockly.MIXLY_MICROBIT_shake,
                'up': Blockly.MIXLY_UP,
                'down':Blockly.MIXLY_DOWN,
                'left':Blockly.MIXLY_LEFT,
                'right':Blockly.MIXLY_RIGHT,
                'face up': Blockly.MIXLY_MICROBIT_face_up,
                'face down': Blockly.MIXLY_MICROBIT_face_down,
                'freefall':Blockly.MIXLY_MICROBIT_freefall,
                '3g': '3g',
                '6g': '6g',
                '8g': '8g'
            };
            return mode0 +mode1+mode2+ TOOLTIPS[mode]+mode3;
        });
    }
};

Blockly.Blocks['sensor_get_acceleration'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_ACCELERATION)
        .appendField(new Blockly.FieldDropdown([
            ["x", "x"],
            ["y", "y"],
            ["z", "z"],
            ["(x,y,z)", "values"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_ACCELERATION);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('key');
            var mode0 = Blockly.MIXLY_MICROBIT_PY_STORAGE_GET;
            var mode1 = Blockly.MIXLY_MICROBIT_Direction;
            var mode2 = Blockly.MIXLY_MICROBIT_JS_ACCELERATION1;
            var TOOLTIPS = {
                'x': 'x',
                'y': 'y',
                'z': 'z',
                '(x,y,z)':Blockly.MIXLY_MICROBIT_Shiliang_Direction,
            };
            return mode0 +TOOLTIPS[mode]+mode1+mode2;
        });
    }
};

Blockly.Blocks['sensor_set_acceleration'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_SET_ACCELERATION)
        .appendField(new Blockly.FieldDropdown([
            ["1g", "AcceleratorRange.OneG"],
            ["2g", "AcceleratorRange.TwoG"],
            ["4g", "AcceleratorRange.FourG"],
            ["8g", "AcceleratorRange.EightG"]
            ]), "key");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_SET_ACCELERATION);
    }
};

Blockly.Blocks['sensor_get_gestures'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_GET)
        .appendField(new Blockly.FieldDropdown([
            [Blockly.MIXLY_MICROBIT_JS_GET_GESTURE,'all'],
            [Blockly.MIXLY_MICROBIT_JS_CURRENT_GESTURE,'current']
            ]),'GES')
        .appendField(Blockly.MIXLY_MICROBIT_JS_GESTURE);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('GES');
            var mode0 = Blockly.MIXLY_MICROBIT_JS_GET;
            var mode1 = Blockly.MIXLY_MICROBIT_JS_GESTURE;
            var TOOLTIPS = {
                'all': Blockly.MIXLY_MICROBIT_JS_GET_GESTURE,
                'current':Blockly.MIXLY_MICROBIT_JS_CURRENT_GESTURE
            };
            return mode0 +TOOLTIPS[mode]+mode1;
        });
    }
};

Blockly.Blocks['sensor_current_gesture'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_CURRENT_GESTURE)
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_light_level'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_LIGHT_LEVEL)
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};
Blockly.Blocks['sensor_calibrate_compass'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_CALIBRATE_COMPASS)
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_CALIBRATE_COMPASS);
    }
};
Blockly.Blocks['sensor_is_compass_calibrated'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_IS_COMPASS_CALIBRATED)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_IS_COMPASS_CALIBRATED1);
    }
};
Blockly.Blocks['sensor_compass_heading'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_BY_ANGLE)
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};
Blockly.Blocks['sensor_temperature'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_Board_temperature)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_Board_temperature);
    }
};


Blockly.Blocks['sensor_field_strength'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_GET_COMPASS)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_JS_FIELD_STRENGTH,'get_field_strength'],
            [Blockly.MIXLY_MICROBIT_JS_BY_ANGLE,'heading'],
            ["x", "get_x"],
            ["y", "get_y"],
            ["z", "get_z"],
            ]),'compass');
        this.setOutput(true, Number);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('compass');
            var mode0 = Blockly.MIXLY_MICROBIT_JS_GET_COMPASS;
            var TOOLTIPS = {
                'strength':Blockly.MIXLY_MICROBIT_JS_FIELD_STRENGTH,
                'heading':Blockly.MIXLY_MICROBIT_JS_BY_ANGLE
            };
            return mode0 +TOOLTIPS[mode];
        });
    }
};


Blockly.Blocks['sensor_rotation'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_ROTATION)
        .appendField(new Blockly.FieldDropdown([
            ["pitch", "Rotation.Pitch"],
            ["roll", "Rotation.Roll"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};
Blockly.Blocks['sensor_magnetic'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_MAGETIC_FORCE)
        .appendField(new Blockly.FieldDropdown([
            ["x", "Dimension.X"],
            ["y", "Dimension.Y"],
            ["z", "Dimension.Z"],
            ["strength", "Dimension.Strength"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_distance_hrsc04'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_CHAOSHENGBO)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_CHAOSHENGBO);
    }
};

Blockly.Blocks.DS1307_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_RTCINIT);
        //this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTCTypeList), 'RTCType');
        this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('myRTC');
        this.appendValueInput("SDA")
        .appendField("SDA#")
        .setCheck(Number);
        this.appendValueInput("SCL")
        .appendField("SCL#")
        .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_RTCINIT);
    },
    //mutation有问题，暂时弃用
};

var RTC_TIME_TYPE = [
[Blockly.MIXLY_YEAR, "Year"],
[Blockly.MIXLY_MONTH, "Month"],
[Blockly.MIXLY_DAY, "Day"],
[Blockly.MIXLY_HOUR, "Hour"],
[Blockly.MIXLY_MINUTE, "Minute"],
[Blockly.MIXLY_SECOND, "Second"],
[Blockly.MIXLY_WEEK, "Week"],
[Blockly.MIXLY_MIX1, "Mix1"],
[Blockly.MIXLY_MIX2, "Mix2"],
];


//传感器-实时时钟块_获取时间
Blockly.Blocks.RTC_get_time = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RTCGETTIME);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField('myRTC');
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    var thisBlock = this;
    this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('TIME_TYPE');
        var mode0 = Blockly.MIXLY_RTCGETTIME;
        var TOOLTIPS = {
            'Year':Blockly.MIXLY_YEAR,
            'Month':Blockly.MIXLY_MONTH,
            'Day':Blockly.MIXLY_DAY,
            'Hour':Blockly.MIXLY_HOUR,
            'Minute':Blockly.MIXLY_MINUTE,
            'Second':Blockly.MIXLY_SECOND,
            'Week':Blockly.MIXLY_WEEK,
            'Mix1':Blockly.MIXLY_MIX1,
            'Mix2':Blockly.MIXLY_MIX2
        };
        return mode0 +TOOLTIPS[mode];
    });
}
};

Blockly.Blocks.RTC_set_time = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RTCSETTIME)
    .appendField('myRTC');
    this.appendValueInput("hour")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_HOUR);
    this.appendValueInput("minute")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_MINUTE);
    this.appendValueInput("second")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_SECOND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.MIXLY_RTCSETTIME+Blockly.MIXLY_MIX2);
}
};

Blockly.Blocks.RTC_set_date = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RTCSETDATE)
    .appendField('myRTC');
    this.appendValueInput("year")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_YEAR);
    this.appendValueInput("month")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_MONTH);
    this.appendValueInput("day")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_DAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_RTCSETDATE+Blockly.MIXLY_MIX1);
}
};

Blockly.Blocks['sensor_compass_reset'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.sensor.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset",
      "message0" : Blockly.MIXLY_MICROBIT_Reset_COMPASS
  });
    this.setTooltip(Blockly.MIXLY_MICROBIT_Reset_COMPASS);
}
};

Blockly.Blocks['sensor_light'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_LIGHT);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MICROBIT_SENSOR_LIGHT_TOOLTIP);
    }
};
*/