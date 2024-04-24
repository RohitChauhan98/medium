import { EditorProvider, FloatingMenu, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Italic from '@tiptap/extension-italic'

// define your extension array
const extensions = [
    StarterKit, Underline, Italic
]

interface contentType {
    updateContent: (newValue: string) => void;
}




const MenuBar = ({ updateContent }: contentType) => {
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
                className={`${editor.isActive('bold') ? 'is-active' : ''}  border-2 rounded-md px-1 m-1`}
            >
                bold
            </button>
            <button
                onClick={() => editor.commands.clearContent()}
                className={`${editor.isActive('bold') ? 'is-active' : ''}  border-2 rounded-md px-1 m-1`}
            >
                clear
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`${editor.isActive('underline') ? 'is-active' : ''}  border-2 rounded-md px-1 m-1`}
            >
                Underline
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`${editor.isActive('italic') ? 'is-active' : ''} border-2 rounded-md px-1 m-1`}
            >
                Italic
            </button>
        </div>
    );
}



const Tiptap = ({ updateContent }: contentType) => {
    const initailTxt = '<p>Write something here...</p>'
    return (
        <EditorProvider slotBefore={<MenuBar updateContent={updateContent} />} extensions={extensions} content={initailTxt}>
            <FloatingMenu> </FloatingMenu>
        </EditorProvider>
    )
}

export default Tiptap