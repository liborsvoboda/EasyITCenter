using System;
using System.Drawing;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Animation;


namespace EasyITSystemCenter.GlobalStyles {

    /// <summary>
    /// Library of Defined Effect Types
    /// </summary>
    public enum AnimationLibrary {
        RotationAndSizeEffect,
    }


    /// <summary>
    /// Implemented StoryBoard Programmatic Types
    /// Rotation is Rotate Effect
    /// With is 
    /// </summary>
    public enum EffectTypes {
        RotationEffect,
        SizeNoneToWidthEffect,
        SizePulseEffect
    }

    /// <summary>
    /// Implemented Trigger Types Reactions
    /// MouseMove Show OneTime on MouseOver
    /// OnInit Show Forever After initialize
    /// </summary>
    public enum TriggerTypes {
        OnMouseMove,
        OnInitOnly,
        Forever
    }
  
    /// <summary>
    /// Programmatic StoryBoard Effect Library For Dynamic Using
    /// On Generated Objects Without XAML Definitions 
    /// </summary>
    public static class EffectLibrary {

        /// <summary>
        /// Programatic Defined StoryBoardEffect Library 
        /// for Multiple Using With Direct Join On Setted Object 
        /// Using Example:
        /// Tile.WidthProperty, Image.WidthProperty, UIElement.RenderTransformProperty
        /// </summary>
        /// <returns></returns>
        public static object GetAnimationEffect(AnimationLibrary selectedAnimation, EffectTypes selectedEffect, TriggerTypes selectedTrigger,double toValue, int effectTime) {

            //Prepare Global Properties for Use in Effect Setting
            #region  Prepare Effect Variables
            RepeatBehavior cycleSetting = selectedTrigger != TriggerTypes.Forever ? new RepeatBehavior(1) : RepeatBehavior.Forever;
            bool autoreversing = selectedEffect == EffectTypes.SizePulseEffect ? true : false;/* RotateTransform rotateTransform = new RotateTransform();*/

            #endregion


            //Animations Effect Library
            #region Animation Types Library

            DoubleAnimation RotationAndSizeEffect = new DoubleAnimation() {
                From = toValue,
                To = toValue,
                Duration = TimeSpan.FromSeconds(effectTime),
                RepeatBehavior = cycleSetting,
                AutoReverse = autoreversing,  
                BeginTime = TimeSpan.FromSeconds(0),
                FillBehavior = FillBehavior.Stop, 
                Name = "RotationAndSizeEffect",
                EasingFunction = selectedEffect == EffectTypes.RotationEffect ? new QuadraticEase() : null,
            };

            #endregion

            //Set Mouse Triggers 
            RotationAndSizeEffect.Completed += (sEnd, eEnd) => { RotationAndSizeEffect.From = toValue; };
            RotationAndSizeEffect.CurrentStateInvalidated += (sEnd, eEnd) => { RotationAndSizeEffect.SetCurrentValue(DoubleAnimation.FromProperty, toValue); };

            return RotationAndSizeEffect;
        }
    }
}