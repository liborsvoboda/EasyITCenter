﻿using System;
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
        SizeZeroToWidthEffect,
        SizePulseEffect
    }

    /// <summary>
    /// Implemented Trigger Types Reactions
    /// MouseMove Show OneTime on MouseOver
    /// OnInit Show Forever After initialize
    /// </summary>
    public enum TriggerTypes {
        OnMouseMove,
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
        /// double iconSize = 120;
        /// Image icon = new Image() { Width = iconSize, Height = iconSize, Source = spinner, VerticalAlignment = VerticalAlignment.Stretch, HorizontalAlignment = HorizontalAlignment.Stretch };
        /// Get StoryBoard Type From Animation Library
        /// icon = (Image) EffectLibrary.GetAnimationEffect(icon, AnimationLibrary.RotationAndSizeEffect, EffectTypes.SizeNoneToWidthEffect, TriggerTypes.OnMouseMove, iconSize, 2);
        /// Tile.WidthProperty, Image.WidthProperty, UIElement.RenderTransformProperty
        /// </summary>
        /// <returns></returns>
        public static FrameworkElement GetAnimationEffect(FrameworkElement objectForAnimation, AnimationLibrary selectedAnimation, EffectTypes selectedEffect, TriggerTypes selectedTrigger, double toValue, int effectTime) {

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
                Duration = TimeSpan.FromSeconds(selectedEffect == EffectTypes.SizePulseEffect ? effectTime * 2 : effectTime),
                RepeatBehavior = cycleSetting,
                AutoReverse = autoreversing,
                BeginTime = TimeSpan.FromSeconds(0),
                FillBehavior = selectedTrigger != TriggerTypes.Forever ? FillBehavior.Stop : FillBehavior.HoldEnd,
                Name = "RotationAndSizeEffect",
                EasingFunction = selectedEffect == EffectTypes.RotationEffect ? new QuadraticEase() : null,
            };

            #endregion

            //Set Mouse Triggers 
            if (selectedTrigger != TriggerTypes.Forever) { RotationAndSizeEffect.Completed += (sEnd, eEnd) => { RotationAndSizeEffect.From = toValue; }; }
            RotationAndSizeEffect.CurrentStateInvalidated += (sEnd, eEnd) => { RotationAndSizeEffect.SetCurrentValue(DoubleAnimation.FromProperty, toValue); };
            objectForAnimation.MouseEnter += (sStart, eStart) => { if (RotationAndSizeEffect.From == toValue) { RotationAndSizeEffect.From = 0;
                    Storyboard.SetTarget(RotationAndSizeEffect, (FrameworkElement)sStart); Storyboard.SetTargetProperty(RotationAndSizeEffect, new PropertyPath(FrameworkElement.WidthProperty));
                    var storyboard = new Storyboard() { Duration = selectedTrigger != TriggerTypes.Forever ? TimeSpan.FromSeconds(effectTime) : Duration.Forever };
                    storyboard.Children.Clear(); storyboard.Children.Add(RotationAndSizeEffect); storyboard.Begin((FrameworkElement)sStart, true);
                }
            };


            return objectForAnimation; 

        }
    }
}