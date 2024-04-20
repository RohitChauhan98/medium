import { EditorProvider, FloatingMenu, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

// define your extension array
const extensions = [
    StarterKit, Underline
]

interface contentType {
    updateContent: (newValue: string) => void;
}




const MenuBar = ({updateContent}: contentType) => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }
    const temp = JSON.stringify(editor.getHTML(), null, 2);
    // console.log(temp)
    updateContent(temp);

    return (
        <div className='flex'>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={`mr-5 ${editor.isActive('bold') ? 'is-active' : ''}`}
            >
                bold
            </button>
            <button
                onClick={() => editor.commands.clearContent()}
                className={`mr-5  ${editor.isActive('bold') ? 'is-active' : ''}`}
            >
                clear
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`${editor.isActive('underline') ? 'is-active' : ''} mr-5`}
            >
                Underline
            </button>
        </div>
    );
}



const Tiptap = ({updateContent}: contentType) => {
    const initailTxt = '<p>Hello World!</p>'
    return (
        <EditorProvider slotBefore={<MenuBar updateContent={updateContent}/>}  extensions={extensions} content={initailTxt}>
            <FloatingMenu> </FloatingMenu>
            {/* <BubbleMenu>This is the bubble menu</BubbleMenu> */}
        </EditorProvider>
    )
}

export default Tiptap