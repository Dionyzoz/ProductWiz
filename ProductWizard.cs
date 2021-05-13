using System;
using Sana.Extensions.ContentBlocks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace ProductWizard
{
    public class ProductWizardModel : ContentBlockModel
    {
        public string Source { get; set; }
        public string Title { get; set; }
    }

}
